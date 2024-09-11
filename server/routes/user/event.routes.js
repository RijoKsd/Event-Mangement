import express from "express";
import {
  addEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
} from "../../controllers/user/event.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import upload from "../../middleware/upload.middleware.js";

const eventRouter = express.Router();

 eventRouter.post("/add", authMiddleware, upload.single("image"), addEvent);
 eventRouter.get("/get", getAllEvents);
 eventRouter.put("/update", authMiddleware, updateEvent);
 eventRouter.delete("/delete", authMiddleware, deleteEvent);

export default eventRouter;