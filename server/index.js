import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Router import
import postRoutes from "./routes/posts.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

// Here first parameter is set up the starting point for all the routes inside of posts.js .
// Every routes inside postRoutes is going to start with "/posts"
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MongoDB Setup

const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
