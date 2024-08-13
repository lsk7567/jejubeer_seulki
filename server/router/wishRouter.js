import express from "express";
import * as controller from "../controller/wishController.js";

const router = express.Router();

// router.post("/", controller.getWishs);
// router.post("/add", controller.insert);
// router.post("/count", controller.getCount);
router.post("/wishlist", controller.wishList);
router.post("/product", controller.orderProduct);

export default router;
