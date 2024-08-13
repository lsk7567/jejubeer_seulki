import * as repository from "../repository/newsRepository.js";

/* 리스트 출력 */
export const newsList = async (req, res) => {
  // console.log("리스트출력 컨트롤러까지왔음");
  const data = req.body;
  const result = await repository.newsList(data);
  res.json(result);
};

/* 새 게시글 작성 */
export const newsWrite = async (req, res) => {
  const formData = req.body;
  // console.log("뉴스 폼 =>", formData);
  const result = await repository.newsWrite(formData);
  res.json(result);
};

/* 게시글 디테일 출력 */
export const newsDetail = async (req, res) => {
  const { nid } = req.body;
  const result = await repository.newsDetail(nid);
  res.json(result);
};

/* 조회수 업데이트 */
export const updateHits = async (req, res) => {
  const { nid } = req.body;
  const result = await repository.updateHits(nid);
  res.json(result);
};

/* 이전-다음 글 가져오기 */
export const prevNextNews = async (req, res) => {
  const currentNid = parseInt(req.params.nid);
  const prevNid = await repository.getPrevNid(currentNid);
  const nextNid = await repository.getNextNid(currentNid);
  const prevNtitle = await repository.getPrevNtitle(currentNid);
  const nextNtitle = await repository.getNextNtitle(currentNid);

  res.json({
    prevNid: prevNid,
    nextNid: nextNid,
    prevNtitle: prevNtitle,
    nextNtitle: nextNtitle,
  });
};

/*
 * 게시글 삭제 */
export const bidDelete = async (req, res) => {
  const { nid } = req.body; //구조분해할당하여 json객체->정수로 사용하기 쉽게 만들어준다.
  const result = await repository.bidDelete(nid);
  res.json(result);
};

/*
 * 게시글 업데이트 */
export const update = async (req, res) => {
  const boardFormData = req.body;
  console.log("data ->", boardFormData);
  const result = await repository.update(boardFormData);
  res.json(result);
};
