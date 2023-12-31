import mongoose from "mongoose";

const connection = {};

export async function connectDB() {
  if (connection.isConnected) {
    console.log("Already connected to database.");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection to the database.");

      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("New connection to the database.");
  connection.isConnected = db.connections[0].readyState;
}

export async function disconnectDB() {
  if (connection.isConnected) {
    if (process.env.NODE_END === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnecting from database during development");
    }
  }
}
