import User from "../../../../models/User";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { redirect } from "next/navigation";
import { sendEmail } from "@/utils/verifyEmail";
import successfullyVerified from "../../../../emails/successfullyVerifiedTemplate";

export async function GET(req, { params }) {
  connectDB();
  try {
    const { token } = params;

    const user = await User.findOne({ verificationToken: token });
    const updateUser = await user.updateOne({
      $set: {
        emailVerified: true,
        active: true,
        verificationToken: "used",
      },
    });

    if (updateUser) {
      sendEmail(
        user.email,
        "http://localhost:3000/joinus",
        "Successfully verified email.",
        successfullyVerified,
        user.name
      );
      console.log(user);
      console.log(user.email);
      console.log("Successfully updated");
    }

    disconnectDB();
    if (!user) {
      throw new Error("Invalid verification token.");
    }
    redirect("/joinus");
  } catch (err) {
    redirect("/joinus");
  }
}
