import express from "express";
import {magicEnhance, dummyResponse} from "../Controller/CanvasClient.controlllers.js";
import genAI from "../Controller/genAi.controller.js";
const router = express.Router();



router.get("/magicEnhancer",magicEnhance);
router.get("/dummyResponse",dummyResponse)
router.get("/genAiWeb",genAI)

export default router; 