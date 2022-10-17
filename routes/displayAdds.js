import express from "express";
import { displayadd } from "../controller/add-controller";

const router = express.Router();

router.post("/displayadd",displayadd);

export default router;