import express from "express";
import {
  addEvent,
  getAllEvents,
  updateEventById,
  deleteEvent,
  getEventOfUser,
  getEventById,
} from "../../controllers/user/event.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import upload from "../../middleware/upload.middleware.js";

const eventRouter = express.Router();

 eventRouter.post("/add", authMiddleware, upload.single("image"), addEvent);
 eventRouter.get("/all", getAllEvents);
 eventRouter.get("/user", authMiddleware, getEventOfUser);
 eventRouter.get("/get/:eventId", authMiddleware, getEventById);
 eventRouter.put("/update/:eventId", authMiddleware, updateEventById);
 eventRouter.delete("/delete/:eventId", authMiddleware, deleteEvent);

export default eventRouter;