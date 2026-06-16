import express from "express";
import {
  updateCareersPage,
  getCareersPage
} from "../controllers/CareersController.js";

const router = express.Router();

router.get("/", getCareersPage);

router.put("/", updateCareersPage);

export default router;