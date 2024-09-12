import express from "express";
import authRouter from "./auth/auth.routes.js";
import eventRouter from "./user/event.routes.js";
import adminRouter from "./admin/user.routes.js";
import adminEventRouter from "./admin/events.routes.js"
import adminDashboardRouter from "./admin/dashboard.routes.js"

const router = express.Router();

router.use("/auth", authRouter);
router.use("/event", eventRouter);
router.use("/admin", adminRouter);
router.use("/admin/events", adminEventRouter);
router.use("/admin/dashboard", adminDashboardRouter);

export default router;