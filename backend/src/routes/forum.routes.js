import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { listForum, createForum, getForumDetail, createComment } from "../controllers/forum.controller.js";

const router = express.Router();

router.get("/", verifyToken, listForum);

router.post("/", verifyToken, createForum);

router.get("/:id", verifyToken, getForumDetail);

router.post("/:id/comments", verifyToken, createComment);

export default router;