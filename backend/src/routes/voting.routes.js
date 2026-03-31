import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { listVoting, submitVote } from "../controllers/voting.controller.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.json({ message: "Voting data (dummy) "});
});

router.post("/", verifyToken, (req, res) => {
    res.json({ message: "Vote submitted (dummy) "});
});

export default router;