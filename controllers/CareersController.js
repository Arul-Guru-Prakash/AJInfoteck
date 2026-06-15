import Careers from "../models/Career.js";

export const updateCareersPage = async (req, res) => {
  try {

    const careers = await Careers.findOneAndUpdate(
      {},
      req.body,
      {
        returnDocument: "after",
        upsert: true
      }
    );

    res.status(200).json({
      message: "Careers page updated",
      careers
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getCareersPage = async (req, res) => {
  try {

    const careers = await Careers.findOne();

    res.status(200).json(careers);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};