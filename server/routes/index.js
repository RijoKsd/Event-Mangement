import express from "express";
import authRouter from "./auth/auth.routes.js";
import eventRouter from "./user/event.routes.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/event", eventRouter);

export default router;