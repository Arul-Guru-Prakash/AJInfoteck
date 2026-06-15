import StaffPro from "../models/StaffPro.js";


// GET StaffPRO Page
export const getStaffPro = async (req, res) => {
  try {
    const data = await StaffPro.findOne();

    if (!data) {
      return res.status(404).json({
        message: "StaffPRO content not found"
      });
    }

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// UPDATE StaffPRO Page (Admin Only)
export const updateStaffPro = async (req, res) => {
  try {
    let page = await StaffPro.findOne();

    // If document doesn't exist → create empty first
    if (!page) {
      page = await StaffPro.create({});
    }

    const updated = await StaffPro.findByIdAndUpdate(
      page._id,
      { $set: req.body },
      { returnDocument: "after" }   // Correct for latest Mongoose
    );

    res.status(200).json({
      message: "StaffPRO page updated successfully",
      data: updated
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};