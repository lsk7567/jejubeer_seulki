import express from "express";
import * as controller from "../controller/cartController.js";

const router = express.Router();

router.post("/", controller.getCarts);
router.post("/add", controller.insert);
router.post("/count", controller.getCount);
router.post("/delete", controller.deleteCarts);
router.post("/order", controller.orderProduct);
/* router.post("/order", (req, res) => {
  console.log("orderRouter -->", req.body); */

export default router;
