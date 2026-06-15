import express from "express";
import {
  loginAdmin,
  registerAdmin,
} from "../controllers/AuthController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);

// Use this once to create first admin
router.post("/register", registerAdmin);



export default router;