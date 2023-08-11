import jwt from "jsonwebtoken";

export function createActivationToken(payload) {
  return jwt.sign(payload, process.env.NEXT_PUBLIC_ACTIVATION_TOKEN_SECRET, {
    expiresIn: "2d",
  });
}
