import { getClinics, searchClinics } from "../contollers/clinicsController.js";

import { Router } from "express";
const router = Router();

router.get("/", getClinics);
router.get("/search", searchClinics);

export default router;
