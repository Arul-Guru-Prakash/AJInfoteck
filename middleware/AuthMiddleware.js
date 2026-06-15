import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

/* ===============================
   PROTECT ROUTES
   Verify JWT Token
================================ */
export const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // If no token
    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach admin to request
    req.admin = await Admin.findById(decoded.id).select("-password");

    if (!req.admin) {
      return res.status(401).json({
        message: "Admin not found"
      });
    }

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Not authorized, token failed"
    });
  }
};