import express from "express";
import * as controller from "../controller/reviewController.js";

const router = express.Router();

/**
 * 구매평 리스트 가져오기
 */
router.post("/", controller.getProductReview);

/**
 * 구매평 갯수 가져오기
 */
router.post("/count", controller.getCountReview);

export default router;