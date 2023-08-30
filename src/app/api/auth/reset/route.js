import User from "../../../../../models/User";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const bcrypt = require("bcrypt");

export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { token, password, email } = body;
    const user_id = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_RESET_TOKEN_SECRET
    ).id;

    const encryptedPassword = await bcrypt.hash(password, 12);

    const user = await User.findOne({ _id: user_id });

    if (email !== user.email) {
      return NextResponse.json(
        {
          message: "Please enter your email correctly.",
        },
        {
          status: 400,
        }
      );
    }

    const testPassword = await bcrypt.compare(password, user.password);

    if (testPassword) {
      return NextResponse.json(
        {
          message: "Please type a new password.",
        },
        {
          status: 400,
        }
      );
    }

    const updateUserPassword = await User.findOneAndUpdate(
      { _id: user_id },
      { password: encryptedPassword }
    );

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
      {
        message:
          "Your password has been successfully reset try to sign in now.",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message:
          "Your password reset link might have expired or your request was invalidated due to server error please request a new link and try again.",
      },
      {
        status: 500,
      }
    );
  }
}
