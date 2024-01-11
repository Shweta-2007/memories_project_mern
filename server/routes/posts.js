import express from "express";

import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// This route is not going to reach by localhost:5000/
// This route is going to reach by localhost:5000/posts/ because we have added a prefix to all the routes in here
router.get("/", getPosts);

export default router;
