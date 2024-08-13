import { db } from "../db/database_mysql80.js";

// /*
//  * 위시리스트 count
//  */
// export const getCount = async (userId) => {
//   const sql = `
//   select sum(qty) as count from jb_wish
//   where user_id = ?
//   `;
//   return db.execute(sql, [userId]).then((result) => result[0][0]);
// };

// /*
//  * 위시리스트 체크
//  */

// const wishCheck = async (items) => {
//   console.log("wishCheck -->", items.pid, items.userId);
//   const pid = parseInt(items.pid);
//   const userId = items.userId;
//   const sql = `
//   select count(wid) cnt, wid from jb_wish
//   where pid = ? and user_id =?
//   group by wid
//   `;

//   return await db.execute(sql, [pid, userId]).then((result) => result[0]);
// };

// /*
//  * 위시리스트 추가
//  */
// export const insert = async (items) => {
//   const checkResult = await wishCheck(items);
//   console.log("checkResult--->", checkResult);
//   let result_rows = 0;
//   let sql = ``;

//   if (checkResult === undefined) {
//     sql = `
//     insert into jb_wish(pid, user_id)
//     values(?, ?)
//     `;
//     const [result] = await db.execute(sql, [items.pid, items.userId]);
//     result_rows = result.affectedRows;
//   } else {
//     sql = `
//     update jb_wish set qty = qty + 1 where wid = ?
//     `;
//     const [result] = await db.execute(sql, [checkResult.wid]);
//     result_rows = result.affectedRows;
//   }

//   return { cnt: result_rows };
// };

/*
 * 주문 조회
 */
export const orderProduct = async (orderData) => {
  console.log("orderProduct repository -->", orderData[0]);
  const params = [orderData[0]];
  const sql = `
    select * from jb_order where user_id = ?
  `;

  return db.execute(sql, params).then((result) => result[0]);
};

/*
 * 위시리스트 조회
 */
export const wishList = async (wish) => {
  /*  console.log("wishList repository -->", wish[0]); */
  const params = [wish[0]];
  const sql = `
    select * from jb_wish where user_id = ?
  `;

  return db.execute(sql, params).then((result) => result[0]);
};
