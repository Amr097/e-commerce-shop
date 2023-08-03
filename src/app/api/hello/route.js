import { NextResponse } from "next/server";

import { connectDB, disconnectDB } from "@/utils/mongo";

export async function GET(req) {
  connectDB();
  disconnectDB();

  return NextResponse.json(
    { name: "John Doe" },
    {
      status: 200,
    }
  );
}
