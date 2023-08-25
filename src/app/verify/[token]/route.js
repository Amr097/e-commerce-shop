import User from "../../../../models/User";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { redirect } from "next/navigation";
import { sendEmail } from "@/utils/handleEmail";
import successfullyVerified from "../../../../emails/successfullyVerifiedTemplate";

export const metadata = {
  title: "Verify| Nostra",
  description: "Online shopping service for all your needs",
  icons: {
    icon: "/images/favicon.svg",
  },
};

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
        "https://nostra-shop.netlify.app/joinus",
        "Successfully verified email.",
        successfullyVerified,
        user.name
      );
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
