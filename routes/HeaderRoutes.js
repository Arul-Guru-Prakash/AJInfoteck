import express from "express";
import { getHeader, updateHeader } from "../controllers/HeaderController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", getHeader);
router.put("/", protect, updateHeader);

export default router;