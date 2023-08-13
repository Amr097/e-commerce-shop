import User from "../../../../models/User";
import { connectDB, disconnectDB } from "@/utils/mongo";
import { redirect } from "next/navigation";

export async function GET(req, { params }) {
  connectDB();
  try {
    const { token } = params;

    const user = await User.updateOne(
      { verificationToken: token },
      {
        $set: {
          emailVerified: true,
          active: true,
          verificationToken: "used",
        },
      }
    );
    disconnectDB();
    if (!user) {
      throw new Error("Invalid verification token.");
    }
    redirect("/joinus");
  } catch (err) {
    redirect("/joinus");
  }
}
