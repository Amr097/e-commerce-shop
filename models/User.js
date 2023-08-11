import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Please enter your username",
    },
    email: {
      type: String,
      required: "Please enter your email",
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: "Please enter a password",
    },
    image: {
      type: String,
      default:
        "https://amr-blogging-app.s3.eu-central-1.amazonaws.com/pngegg.png",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: "",
    },
    address: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        city: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        streetAddress: {
          type: String,
        },
        apartmentNumber: {
          type: String,
        },
        streetNumber: {
          type: String,
        },
      },
    ],
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
