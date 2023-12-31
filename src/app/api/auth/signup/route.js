import { NextResponse } from "next/server";
import { validateEmail } from "@/utils/validateEmail";
import User from "../../../../../models/User";
import { createActivationToken } from "@/utils/tokens";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { sendEmail } from "@/utils/handleEmail";
import confirmMail from "../../../../../emails/confirmMailTemplate";

const bcrypt = require("bcrypt");
let addUser;

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const { name, password, email } = body;
    const user = await User.findOne({ email });

    console.log(user);

    if (!email || !password || !name)
      return NextResponse.json(
        { message: "Please fill all the required fields" },
        {
          status: 400,
        }
      );

    if (!validateEmail(email))
      return NextResponse.json(
        { message: "Invalid email address." },
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

    const newUser = await new User({
      name,
      password: encryptedPassword,
      email,
    });

    addUser = await newUser.save();

    const activationToken = createActivationToken({
      id: addUser._id.toString(),
    });

    await User.updateOne(
      { _id: addUser._id },
      { $set: { verificationToken: activationToken } }
    );

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/verify/${activationToken}`;

    try {
      const mail = await sendEmail(
        email,
        url,
        "Verify your account",
        confirmMail,
        name
      ).then((result) => {
        const resultAsString = JSON.stringify(result);
        return resultAsString;
      });
    } catch (err) {
      await User.deleteOne({ _id: addUser._id });
      console.log(err.message);
      return NextResponse.json(
        {
          message:
            "Error, failed to send verification email due to google service malfunction, try again if the error presists please contact the developer to fix this problem. ",
        },
        {
          status: 500,
        }
      );
    }

    disconnectDB();

    return NextResponse.json(
      {
        message:
          "Successfully registered, a verification link has been sent to your mail inbox/spam. ",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    await User.deleteOne({ _id: addUser._id });

    return NextResponse.json(
      { message: "Server Error, connection timed out." },
      {
        status: 500,
      }
    );
  }
}
