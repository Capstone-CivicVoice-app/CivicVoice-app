import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { listLapor, createLapor, getLaporDetail, updateLaporStatus } from "../controllers/lapor.controller.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.json({ message: "lapor  list (dummy) "});
});

router.post("/", verifyToken, (req, res) => {
    res.json({ message: "lapor submitted (dummy) "});
});

export default router;