import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";

/* =========================
   LOGIN ADMIN
========================= */
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id)
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* =========================
   REGISTER ADMIN (Optional)
   Use once then disable
========================= */
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await Admin.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({
      name,
      email,
      password
    });

    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id)
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


