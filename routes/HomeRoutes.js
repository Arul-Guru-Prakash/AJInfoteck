import express from "express";
import { getHome, updateHome } from "../controllers/HomeController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", getHome);
router.put("/", protect, updateHome);

export default router;