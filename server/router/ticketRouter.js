import express from "express";
import * as controller from "../controller/ticketController.js";

const router = express.Router();

//TODO 프로그램 예약
router.post("/ticketing", controller.getTicketing);

// router.post("/ticketing", (req, res) => {
//   console.log("티켓팅 확인 ===>", req.body);
// });

//TODO 프로그램 예약조회
router.post("/ticketcheck", controller.getTicketCheck);

// router.post("/ticketcheck", (req, res) => {
//   console.log("티켓팅 확인 ===>", req.body);
// });

//TODO 프로그램 예약조회 상세
router.post("/ticketdetail", controller.getTicketDetail);

// router.post("/ticketdetail", (req, res) => {
//   console.log("예약조회 ===>", req.body);
// });

//TODO 프로그램 예약취소
router.post("/ticketcancel", controller.getTicketCancle);

// router.post("/ticketcancel", (req, res) => {
//   console.log("티켓팅 취소 ===>", req.body);
// });

//TODO 프로그램 잔여석 관리
router.post("/ticketcount", controller.getTicketCount);

// router.post("/ticketcount", (req, res) => {
//   console.log("티켓팅 잔여석 ===>", req.body);
// });

//TODO 관리자 예약내역 조회
router.post("/ticketlist", controller.getTicketList);

export default router;
