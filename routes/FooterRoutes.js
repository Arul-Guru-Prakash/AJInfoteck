import express from "express";
import { getFooter, updateFooter } from "../controllers/FooterController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", getFooter);
router.put("/", protect, updateFooter);

export default router;