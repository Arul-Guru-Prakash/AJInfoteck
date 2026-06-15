import TalentHub from "../models/TalentHub.js";


// Get TalentHub Page Data
export const getTalentHub = async (req, res) => {
  try {
    const data = await TalentHub.findOne();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching TalentHub data",
      error
    });
  }
};


// Create / Update TalentHub Content
export const updateTalentHub = async (req, res) => {
  try {
   const updated = await TalentHub.findOneAndUpdate(
  {},
  req.body,
  {
    returnDocument: "after",
    upsert: true
  }
);

    res.status(200).json({
      message: "TalentHub content updated",
      data: updated
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating TalentHub",
      error
    });
  }
};