import ServicesPage from "../models/Service.js";

export const getServicesPage = async (req, res) => {
  try {
    const page = await ServicesPage.findOne();
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateServicesPage = async (req, res) => {
  try {
    let page = await ServicesPage.findOne();

    if (!page) {
      page = await ServicesPage.create({});
    }

    const updated = await ServicesPage.findByIdAndUpdate(
      page._id,
      { $set: req.body },
      { returnDocument: "after" }
    );

    res.json({
      message: "Services page updated successfully",
      data: updated
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};