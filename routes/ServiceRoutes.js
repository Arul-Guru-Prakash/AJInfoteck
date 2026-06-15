import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import { getServicesPage,updateServicesPage } from "../controllers/ServiceController.js";

const router = express.Router();

router.get("/", getServicesPage);
router.put("/", protect, updateServicesPage);

export default router;