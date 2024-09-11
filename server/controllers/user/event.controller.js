import User from "../../models/user.model.js";
import Event from "../../models/event.model.js";
import cloudinary from "../../helper/cloudinary.js";

export const addEvent = async (req, res) => {
  const { id, role } = req.user;
  const image = req.file.path;
  if (role !== "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to add event" });
  }
  const { title, description, date, time, venue, price, category } = req.body;
  if (
    !title ||
    !description ||
    !date ||
    !time ||
    !venue ||
    !image ||
    !price ||
    !category
  ) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  console.log(req.body, "req.body");
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const imageUrl = await cloudinary.uploader.upload(image, {
      folder: "event-management",
    });

    const newEvent = new Event({
      user: id,
      title,
      description,
      date: new Date(),
      time,
      venue,
      image: imageUrl.secure_url,
      price,
      category,
    });
    await newEvent.save();
    return res.status(201).json({
      message: "Event added successfully",
    });
  } catch (error) {
    console.error("Error in adding event", error);
    return res.status(500).json({ message: "Error in adding event" });
  }
};

export const getEvents = async (req, res) => {};

export const updateEvent = async (req, res) => {};

export const deleteEvent = async (req, res) => {};
