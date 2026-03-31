import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getDashboard } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.json({ message: "Dashboard data (dummy)" });
});

export default router;