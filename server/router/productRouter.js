import express from "express";
import * as controller from "../controller/productController.js";

const router = express.Router();

/* 전체 상품 가져오기 */
router.post("/all", controller.getProductAll);

/* 개별 상품 가져오기 */
router.get("/:pid", controller.getDetailProduct);

/* (admin) 신규 상품 등록하기 */
router.post("/new", controller.insertProduct);

/* (admin) 상품 삭제하기 */
router.post("/delete", controller.deleteProduct);

/* (admin) 상품 수정하기 */
router.post("/modify", controller.modifyProduct);

/* 위시리스트 가져오기 */
router.post("/wishList", controller.getWishList);

export default router;
