- npm init -y
- npm install body-parser cors express mongoose nodemon
- We can also import import like this:
  import express from "express"; => For using this, we need to add "type": "module" in the package.json below "main": "index.js"
  unlike const express = require("express");

# Dependencies used

# Initial Setup:

- import express from "express";
- import bodyParser from "body-parser";
- import mongoose from "mongoose";
- import cors from "cors";

- import dotenv from "dotenv";
- dotenv.config();

- const app = express();

- app.use(bodyParser.json({ limit: "30mb", extended: true }));
- app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
- app.use(cors());

## MongoDB Setup

- Go to mongoDB Atlas and copy code from connect to your application and paste here

- const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

- const PORT = process.env.PORT;

- mongoose
  .connect(CONNECTION_URL)
  .then(() =>
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

# .env

- npm install dotenv

## IMPORTANT-POINTS

- import { getPosts } from "../controllers/posts.js";
  While importing we need to write .js at the end of the file like posts.js Unlike in React where we only use to write import { getPosts } from "../controllers/posts";

## Step-By-Step

- Initial installation
- ** Set up Routing**
  - Created Folder called routes
    - posts.js => This will have all the routes => Change the localhost:5000/ to default localhost:5000/posts => Now all the routes will have prefix /posts
  - Created Folder controllers => Folder structure for backend applications
    - posts.js => This will have Logic for every routes
  - Created Folder models
    - postMessage.js => Created postSchema
  - Created another route for creating post
  - Wrote logic inside getPosts and createPost inside controllers
  -
