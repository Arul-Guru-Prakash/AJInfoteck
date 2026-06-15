import express from "express";
import { getTalentHub, updateTalentHub } from "../controllers/TalentHubController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", getTalentHub);
router.put("/", protect, updateTalentHub);

export default router;