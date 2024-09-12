import User from "../../models/user.model.js";

export const getAllUsers = async (req, res) => {
   const {  role } = req.user;

  if (role === "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to add event" });
  }
  try {
    const users = await User.find({ role: "user"});
    res.status(200).json(users);
  } catch (error) { 
    console.error("Error getting all users", error);
    res.status(500).json({ message: "Error getting all users"});
  }
};

//suspend user
export const suspendUser = async (req, res) => {
    const {  role } = req.user;

  if (role === "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to add event" });
  }
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    user.status = "suspended";
    await user.save();
    return res.status(200).json({ message: "User suspended successfully" });
    
  } catch (error) {
    console.log("Error in suspending user", error);
    res.status(500).json({ message: "Error in suspending user" });
  }
}

// remove user
export const removeUser = async (req, res) => {
  const {  role } = req.user;

  if (role === "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to add event" });
  }
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    user.status = "removed";
    await user.save();
    return res.status(200).json({ message: "User removed successfully" });
  } catch (error) {
    console.log("Error in removing user", error);

    res.status(500).json({ message: "Error in removing user" });
  }
}

// activate user
export const activateUser = async (req, res) => {
  const {  role } = req.user;

  if (role === "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to add event" });
  }
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    user.status = "active";
    await user.save();
    return res.status(200).json({ message: "User activated successfully" });
  } catch (error) {
    console.log("Error in activating user", error);
    res.status(500).json({ message: "Error in activating user" });
  }
}