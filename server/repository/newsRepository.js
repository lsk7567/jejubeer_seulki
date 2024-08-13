import { db } from "../db/database_mysql80.js";

/* 리스트 출력 */
export const newsList = async (data) => {
  const sql = `
  select rno, nid, title, hits, date, total from
  (select 
    row_number() over(order by nid desc) as rno,
    nid, 
    title,
    hits,
    date_format(date, '%Y-%m-%d') as date,
    (select count(*) from jb_news) total
   from jb_news) sb1
   where rno between ? and ?
  `;

  return await db
    .execute(sql, [data.startIndex, data.endIndex])
    .then((result) => result[0]);
};

/* 새 게시글 작성 */
export const newsWrite = async (formData) => {
  const data = [formData.title, formData.content];
  let result_rows = 0;
  const sql = `
  insert into jb_news(title, content, hits, date)
    values(?, ?, 0, curdate())
  `;

  try {
    const [rows] = await db.execute(sql, data);
    result_rows = rows.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/* 게시글 디테일 출력 */
export const newsDetail = async (nid) => {
  // console.log("레파지토리 nid =>", nid);
  const sql = `
    select 
    row_number() over() as rno,
    title, 
    content, 
    hits,
    date_format(date, '%Y-%m-%d') as date
   from jb_news
   where nid = ?
  `;

  return await db.execute(sql, [nid]).then((result) => result[0][0]);
};

/* 조회수 업데이트 */
export const updateHits = async (nid) => {
  let result_rows = 0;
  const sql = `
  update jb_news
    set hits = hits + 1
    where nid = ?
  `;

  try {
    const [rows] = await db.execute(sql, [nid]);
    result_rows = rows.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/* 이전-다음글 가져오기 */
export const getPrevNid = async (currentNid) => {
  const sql = `SELECT nid FROM jb_news WHERE nid < ? ORDER BY nid DESC LIMIT 1`;
  const [result] = await db.execute(sql, [currentNid]);
  return result.length > 0 ? result[0].nid : null;
};

export const getNextNid = async (currentNid) => {
  const sql = `SELECT nid FROM jb_news WHERE nid > ? ORDER BY nid ASC LIMIT 1`;
  const [result] = await db.execute(sql, [currentNid]);
  return result.length > 0 ? result[0].nid : null;
};

export const getPrevNtitle = async (currentNid) => {
  const sql = `SELECT title FROM jb_news WHERE nid < ? ORDER BY nid DESC LIMIT 1`;
  const [result] = await db.execute(sql, [currentNid]);
  return result.length > 0 ? result[0].title : "";
};

export const getNextNtitle = async (currentNid) => {
  const sql = `SELECT title FROM jb_news WHERE nid > ? ORDER BY nid ASC LIMIT 1`;
  const [result] = await db.execute(sql, [currentNid]);
  // console.log("레파지토리>", result[0].title);
  return result.length > 0 ? result[0].title : "";
};

/*
 * 게시글 삭제 */
export const bidDelete = async (nid) => {
  let result_rows = 0;
  const sql = `
    delete from jb_news
      where nid = ?
  `;

  try {
    const [result] = await db.execute(sql, [bid]);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/*
 * 게시글 업데이트 */
export const update = async (boardFormData) => {
  let result_rows = 0;
  const params = [
    boardFormData.title,
    boardFormData.content,
    boardFormData.nid,
  ];
  const sql = `
    update jb_news
      set title = ?, content = ?
      where nid = ?
  `; //bid에 해당하는 게시글만 수정

  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }
  return { cnt: result_rows };
};
