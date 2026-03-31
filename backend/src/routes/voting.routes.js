import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { listVoting, submitVote } from "../controllers/voting.controller.js";

const router = express.Router();

router.get("/", verifyToken, listVoting);

router.post("/", verifyToken, submitVote);

export default router;