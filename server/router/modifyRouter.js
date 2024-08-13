import express from "express";
import * as controller from "../controller/modifyController.js";
const router = express.Router();

router.post("/info", controller.getUserInfo);
router.post("/update", controller.getUpdateInfo);

export default router;