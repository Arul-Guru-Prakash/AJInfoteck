import Home from "../models/Home.js";

/* ===============================
   GET HOME PAGE DATA
================================ */
export const getHome = async (req, res) => {
  try {
    let home = await Home.findOne();

    // If no document exists, create default one
    if (!home) {
      home = await Home.create({});
    }

    res.json(home);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ===============================
   UPDATE HOME PAGE (ADMIN)
================================ */
export const updateHome = async (req, res) => {
  try {
    let home = await Home.findOne();

    if (!home) {
      home = await Home.create({});
    }

    const updated = await Home.findByIdAndUpdate(
      home._id,
      { $set: req.body },  // safer update
      { returnDocument: "after" }
    );

    res.json({
      message: "Home page updated successfully",
      data: updated
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};