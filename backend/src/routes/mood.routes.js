import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getMoodSummary, submitMood } from "../controllers/mood.controller.js";

const router = express.Router();

router.get("/", verifyToken, getMoodSummary);

router.post("/", verifyToken, submitMood);

export default router;