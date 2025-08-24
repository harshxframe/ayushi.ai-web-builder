import express from "express";
import publishwebsite from "../Controller/publish.controller.js";
const router = express();


router.post("/publishwebsite",publishwebsite);


export default router;