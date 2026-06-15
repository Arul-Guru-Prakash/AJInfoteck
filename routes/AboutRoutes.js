import express from "express";
import {
  getAboutPage,
  updateAboutPage
} from "../controllers/AboutController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", getAboutPage);

router.put("/",protect, updateAboutPage);

export default router;