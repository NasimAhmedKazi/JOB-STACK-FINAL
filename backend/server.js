import { connectDB } from "./config/db.js";
import app from "./app.js";
import { once } from "node:events";

const port = Number(process.env.PORT || 5000);

const startServer = async () => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is required");
    }

    await connectDB();

    const server = app.listen(port, "0.0.0.0");
    await once(server, "listening");
    console.log(`Server started on port ${port}`);
  } catch (error) {
    console.error("Failed to start API server:", error);
    process.exitCode = 1;
  }
};

await startServer();