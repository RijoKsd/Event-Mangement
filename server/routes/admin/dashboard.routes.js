import express from "express";
import { getDashboardData } from "../../controllers/admin/dashboard.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getDashboardData);

export default router;