import express from "express";
import {getAllEvents } from "../../controllers/admin/event.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllEvents);

export default router;