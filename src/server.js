// PACKAGES IMPORT
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

// FILES IMPORT
// import { connectToMongoDB } from "./utils/dbConnection.js";
// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// DEFINING VARIABLES
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(cookieParser());

// ROUTES
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// START SERVER
app.listen(PORT, () => {
  //   connectToMongoDB();
  console.log(`server is running on port: ${PORT}`);
});
