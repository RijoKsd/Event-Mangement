import User from "../../models/user.model.js";
import Event from "../../models/event.model.js";
import cloudinary from "../../helper/cloudinary.js";

export const addEvent = async (req, res) => {
  const { id, role } = req.user;

  if (role !== "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to add event" });
  }

  const { title, description, date, time, venue, price, category } = req.body;
  const image = req.file;

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

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const imageUrl = await cloudinary.uploader.upload(image.path, {
      folder: "event-management",
    });

    const newEvent = new Event({
      user: id,
      title,
      description,
      date: new Date(date),
      time,
      venue,
      image: imageUrl.secure_url,
      price,
      category,
    });

    await newEvent.save();
    return res.status(201).json({
      message: "Event added successfully",
      event: newEvent,
    });
  } catch (error) {
    console.error("Error in adding event", error);
    return res.status(500).json({ message: "Error in adding event" });
  }
};

export const getAllEvents = async (req, res) => {    
    try{
        const events = await Event.find();
        return res.status(200).json({ message: "Events fetched successfully", events });
    }catch(error){
        console.error("Error in getting events", error);
        return res.status(500).json({ message: "Error in getting events" });
    }
    
};

export const getEventOfUser = async (req, res) => {
   const { id } = req.user;
  try {
    const events= await Event.find({ user: id });
    if (!events) {
      return res.status(400).json({ message: "Event not found" });
    }
    return res.status(200).json({ message: "Event fetched successfully", events });
  } catch (error) {
    console.error("Error in getting event", error);
    return res.status(500).json({ message: "Error in getting event" });
  }
};

export const updateEvent = async (req, res) => {};

export const deleteEvent = async (req, res) => {};
