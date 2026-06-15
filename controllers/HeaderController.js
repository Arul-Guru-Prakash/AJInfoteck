import Header from "../models/Header.js";

export const getHeader = async (req, res) => {
  try {
    const header = await Header.findOne();
    res.json(header);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHeader = async (req, res) => {
  try {
    let header = await Header.findOne();

    if (!header) {
      header = await Header.create({});
    }

    const updated = await Header.findByIdAndUpdate(
      header._id,
      { $set: req.body },
      { returnDocument: "after" }
    );

    res.json({
      message: "Header updated successfully",
      data: updated
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};