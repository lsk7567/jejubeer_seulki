import express from "express";
import * as controller from "../controller/newsController.js";

const router = express.Router();

/* 리스트 출력 */
router.post("/list", controller.newsList);

/* 새 게시글 작성 */
router.post("/write", controller.newsWrite);

/* 조회수 업데이트 */
router.post("/updateHits", controller.updateHits);

/* 이전-다음글 가져오기 */
router.get("/prevNext/:nid", controller.prevNextNews);

/* 게시글 상세 출력 */
router.post("/:nid", controller.newsDetail);
router.post("/update", controller.update);
router.post("/delete", controller.bidDelete);

export default router;
