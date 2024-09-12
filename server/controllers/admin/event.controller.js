import Event from "../../models/event.model.js";
 

export const getAllEvents = async (req, res) => {
  const {  role } = req.user;

  if (role === "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to add event" });
  }
  try {
    const events = await Event.find().populate("user", "name");
    return res.status(200).json({ message: "Events fetched successfully", events });
  } catch (error) {
    console.error("Error in getting events", error);
    return res.status(500).json({ message: "Error in getting events" });
  }
};

