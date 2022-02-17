import express, { Router } from "express";
import FeatureFlagController from "../controllers/featureflagcontroller";

const router = Router();
const featureFlagController = new FeatureFlagController();

router.get("/all", featureFlagController.get);

export default router;
