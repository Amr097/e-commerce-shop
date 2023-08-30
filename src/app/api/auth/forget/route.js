import { NextResponse } from "next/server";
import User from "../../../../../models/User";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { createResetToken } from "@/utils/tokens";
import { sendEmail } from "@/utils/handleEmail";
import resetPassword from "../../../../../emails/resetPasswordTemplate";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const { email } = body;
    const user = await User.findOne({ email });

    if (!user)
      return NextResponse.json(
        { message: "This email doesn't exist." },
        {
          status: 400,
        }
      );

    const resetToken = createResetToken({
      id: user._id.toString(),
    });

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/reset/${resetToken}`;

    const mail = await sendEmail(
      email,
      url,
      "Password reset.",
      resetPassword,
      user.name
    ).then((result) => {
      const resultAsString = JSON.stringify(result);
      return resultAsString;
    });

    disconnectDB();

    return NextResponse.json(
      {
        message:
          "Successful request, Please check your email for password reset link.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
