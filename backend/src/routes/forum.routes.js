import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { listForum, createForum, getForumDetail, createComment } from "../controllers/forum.controller.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.json({ message: "Forum list (dummy) "});
});

router.post("/", verifyToken, (req, res) => {
    res.json({ message: "Forum post submitted (dummy) "});
});

export default router;