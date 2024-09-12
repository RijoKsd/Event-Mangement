import Event from "../../models/event.model.js";
import User from "../../models/user.model.js";

export const getDashboardData = async (req, res) => {
  const { role } = req.user;

  if (role === "user") {
    return res
      .status(401)
      .json({ message: "You are not authorized to access this data" });
  }

  try {
    const events = await Event.countDocuments();
    const activeUsers = await User.countDocuments({ status: "active", role:"user" });
    const suspendedUsers = await User.countDocuments({ status: "suspended" });
    const removedUsers = await User.countDocuments({ status: "removed" });

    // Get event counts by category
    const eventsByCategory = await Event.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    let data = {
      events,
      activeUsers,
      suspendedUsers,
      removedUsers,
      eventsByCategory: eventsByCategory.reduce((acc, curr) => {
        acc[curr._id] = curr.count;
        return acc;
      }, {}),
    };
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getting dashboard data", error);
    return res.status(500).json({ message: "Error in getting dashboard data" });
  }
};
