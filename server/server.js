import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import indexRouter from "./routes/index.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", indexRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Error in starting server", err);
  }
};

startServer();
