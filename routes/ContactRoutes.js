import express from "express";
import { getContactPage, updateContactPage } from "../controllers/ContactController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", getContactPage);

router.put("/", protect, updateContactPage);

export default router;