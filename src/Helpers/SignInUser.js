import bcrypt from "bcrypt";

export async function SignInUser({ password, user }, disconnectDB) {
  if (!password) throw new Error("Plase enter a valid password.");

  const testPassword = await bcrypt.compare(password, user.password);
  if (!testPassword) throw new Error("False credentials.");
  disconnectDB();
  return user;
}
