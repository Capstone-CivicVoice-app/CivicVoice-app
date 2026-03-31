import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getMoodSummary, submitMood } from "../controllers/mood.controller.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.json({ message: "Mood data (dummy) "});
});

router.post("/", verifyToken, (req, res) => {
    res.json({ message: "Mood submitted (dummy) "});
});

export default router;