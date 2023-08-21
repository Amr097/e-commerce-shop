import { NextResponse } from "next/server";
import { validateEmail } from "@/utils/validateEmail";
import User from "../../../../../models/User";
import { createActivationToken } from "@/utils/tokens";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { sendEmail } from "@/utils/handleEmail";
import confirmMail from "../../../../../emails/confirmMailTemplate";

const bcrypt = require("bcrypt");

export async function POST(req) {
  connectDB();
  try {
    const body = await req.json();
    const { name, password, email } = body;
    const user = await User.findOne({ email });

    if (!email || !password || !name)
      return NextResponse.json(
        { message: "Please fill all the required fields" },
        {
          status: 400,
        }
      );

    if (!validateEmail(email))
      return NextResponse.json(
        { message: "Invalid email address" },
        {
          status: 400,
        }
      );

    if (user)
      return NextResponse.json(
        { message: "An account with the same email address already exists." },
        {
          status: 400,
        }
      );

    if (password.length < 8 || password.length > 16)
      return NextResponse.json(
        { message: "Password must be between 8 and 16 characters." },
        {
          status: 400,
        }
      );

    const encryptedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      password: encryptedPassword,
      email,
    });

    const addUser = await newUser.save();

    const activationToken = createActivationToken({
      id: addUser._id.toString(),
    });

    await User.updateOne(
      { _id: addUser._id },
      { $set: { verificationToken: activationToken } }
    );

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/verify/${activationToken}`;

    const mail = await sendEmail(
      email,
      url,
      "Verify your account",
      confirmMail
    ).then((result) => {
      const resultAsString = JSON.stringify(result); // Convert to JSON string or any other desired format
      return resultAsString;
    });

    disconnectDB();

    return NextResponse.json(
      {
        message: mail,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: mail },
      {
        status: 500,
      }
    );
  }
}
