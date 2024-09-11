import express from "express";
import {
    getAllUsers,
    suspendUser,
    removeUser,
    activateUser,
} from "../../controllers/admin/user.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
router.post("/user/suspend/:userId", authMiddleware, suspendUser);
router.post("/user/remove/:userId", authMiddleware, removeUser);
router.post("/user/activate/:userId", authMiddleware, activateUser);

export default router;