import Contact from "../models/Contact.js";

export const getContactPage = async (req, res) => {
  try {

    const contact = await Contact.findOne();

    res.status(200).json(contact);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateContactPage = async (req, res) => {
  try {

    const contact = await Contact.findOneAndUpdate(
      {},
      req.body,
      {
        upsert: true,
        returnDocument: "after"
      }
    );

    res.status(200).json({
      message: "Contact page updated",
      contact
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};