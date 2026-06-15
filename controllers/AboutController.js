import About from "../models/About.js";

// GET About Page
export const getAboutPage = async (req, res) => {
  try {
    const about = await About.findOne();

    if (!about) {
      return res.status(404).json({ message: "About page not found" });
    }

    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE About Page
export const updateAboutPage = async (req, res) => {
  try {

    const about = await About.findOneAndUpdate(
      {}, 
      req.body,
      {
        returnDocument: "after",
        upsert: true
      }
    );

    res.status(200).json({
      message: "About page updated",
      about
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};