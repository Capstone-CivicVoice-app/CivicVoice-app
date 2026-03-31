import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { listLapor, createLaporItem, getLaporDetail, updateLaporStatusItem } from "../controllers/lapor.controller.js";

const router = express.Router();

router.get("/", verifyToken, listLapor);

router.post("/", verifyToken, createLaporItem);

router.get("/:id", verifyToken, getLaporDetail);

router.put("/:id/status", verifyToken, updateLaporStatusItem);

export default router;
