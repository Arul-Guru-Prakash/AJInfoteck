import express from "express";
import {
  getStaffPro,
  updateStaffPro
} from "../controllers/StaffProController.js";

import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Public Route
router.get("/", getStaffPro);

// Admin Protected Route
router.put("/", protect, updateStaffPro);

export default router;