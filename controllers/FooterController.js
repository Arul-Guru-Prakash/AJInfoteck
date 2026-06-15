import Footer from "../models/Footer.js";
export const updateFooter = async (req, res) => {
  try {

    const footer = await Footer.findOneAndUpdate(
      {},
      req.body,
      {
        upsert: true,
        returnDocument: "after"
      }
    );

    res.json(footer);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFooter = async (req, res) => {
  try {

    const footer = await Footer.findOne();
    res.status(200).json(footer);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};