import User from "../../../../../models/User";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const bcrypt = require("bcrypt");

export async function POST(req) {
  try {
    connectDB();
    const body = await req.json();
    const { token, password } = body;
    const user_id = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_RESET_TOKEN_SECRET
    ).id;

    const encryptedPassword = await bcrypt.hash(password, 12);

    const user = await User.findOneAndUpdate(
      { _id: user_id },
      { password: encryptedPassword }
    );
    console.log(token);
    console.log(jwt.verify(token, process.env.NEXT_PUBLIC_RESET_TOKEN_SECRET));
    disconnectDB();
    if (!user.email) {
      return NextResponse.json(
        {
          message:
            "Your password reset link might have expired or invalid please request a new link and try again.",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { message: "Your password has been successfully reset." },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
