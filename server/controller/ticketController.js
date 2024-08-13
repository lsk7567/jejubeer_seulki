import * as repository from "../repository/ticketRepository.js";

//TODO 프로그램 예약
export const getTicketing = async (req, res) => {
  const formData = req.body;
  // console.log("controller ==> ", formData);
  const result = await repository.getTicketing(formData);
  res.json(result);
  res.end();
};

//TODO 프로그램 예약조회
export const getTicketCheck = async (req, res) => {
  const formData = req.body;
  // console.log("controller ==> ", formData);
  const result = await repository.getTicketCheck(formData);
  res.json(result);
  res.end();
};

//TODO 프로그램 예약조회 상세
export const getTicketDetail = async (req, res) => {
  const formData = req.body;
  // console.log("controller ==> ", formData);
  const result = await repository.getTicketDetail(formData);
  res.json(result);
  res.end();
};

//TODO 프로그램 예약취소
export const getTicketCancle = async (req, res) => {
  const formData = req.body;
  // console.log("controller ==> ", formData);
  const result = await repository.getTicketCancle(formData);
  res.json(result);
  res.end();
};

//TODO 프로그램 잔여석 관리
export const getTicketCount = async (req, res) => {
  const formData = req.body;
  // console.log("controller ==> ", formData);
  const result = await repository.getTicketCount(formData);
  res.json(result);
  res.end();
};

//TODO 관리자 예약내역 조회
export const getTicketList = async (req, res) => {
  const result = await repository.getTicketList();
  res.json(result);
  res.end();
};
