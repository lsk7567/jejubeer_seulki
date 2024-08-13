import { db } from "../db/database_mysql80.js";

/*
 * 장바구니 count
 */
export const getCount = async (userId) => {
  const sql = `
  select sum(qty) as count from jb_cart
  where user_id = ?
  `;
  return db.execute(sql, [userId]).then((result) => result[0][0]);
};

/*
 * 장바구니 체크
 */
const cartCheck = async (items) => {
  const pid = parseInt(items.pid);
  const userId = items.userId;
  const sql = `
  select count(cid) cnt, cid from jb_cart
	where pid = ? and user_id = ?
	group by cid
  `;

  return await db.execute(sql, [pid, userId]).then((result) => result[0][0]);
};

/*
 * 장바구니 추가
 */
export const insert = async (items) => {
  const checkResult = await cartCheck(items);
  console.log("checkResult -->", checkResult);
  let result_rows = 0;
  let sql = ``;

  if (checkResult === undefined) {
    sql = `
    insert into jb_cart(pid, cdate, user_id, qty)
    values(?, now(), ?, ?)
    `;
    const [result] = await db.execute(sql, [
      items.pid,
      items.userId,
      items.qty || 1,
    ]);
    console.log(items.pid);
    result_rows = result.affectedRows;
  } else {
    sql = `
    update jb_cart set qty = qty + ? where cid = ?
    `;
    const [result] = await db.execute(sql, [items.qty || 1, checkResult.cid]);
    result_rows = result.affectedRows;
  }

  return { cnt: result_rows };
};

/*
 * 장바구니 리스트
 */

export const getCarts = async (userId) => {
  const sql = `
  select row_number() over(order by jc.cdate desc) as rno,
        jp.image1 as image,
        jp.name as name,
        jp.sprice as sprice,
        jp.price as price,
        jc.qty,
        jc.cid,
        jc.pid
    from jb_product jp, jb_cart jc
    where jp.pid = jc.pid and user_id = ?
  `;

  return db.execute(sql, [userId]).then((result) => result[0]);
};

/*
 * 장바구니 삭제
 */

export const deleteCarts = async ({ ids, userId }) => {
  if (!ids || !ids.length) {
    throw new Error("No IDs provided for deletion");
  }

  // ids 배열을 쉼표로 구분된 문자열로 변환
  const idsList = ids.join(",");

  // 쿼리 생성
  const sql = `
    DELETE FROM jb_cart
    WHERE pid IN (${idsList}) AND user_id = ?
  `;

  // 쿼리 실행
  return await db.execute(sql, [userId]);
};

/*
 * 주문하기
 */
export const orderProduct = async (orderData) => {
  let result_rows = 0;
  /*  console.log(selectedItems); */
  // console.log("레파지토리", orderData);
  // console.log(orderData.orderNumber);
  // console.log(orderData.selectedItems[0].rno);
  // console.log(orderData.selectedItems[0].pid);
  // console.log(orderData.selectedItems[0].name);
  // console.log(orderData.selectedItems[0].qty);
  // console.log(orderData.selectedItems[0].price);
  // console.log(orderData.selectedItems[0].cid);
  // console.log(orderData.totalAmount);
  // console.log(orderData.paymentMethod);
  // console.log(orderData.userId);

  const params = [
    orderData.orderNumber,
    orderData.selectedItems[0].pid,
    orderData.userId,
    orderData.selectedItems[0].qty,
    orderData.totalAmount,
    orderData.paymentMethod,
    orderData.selectedItems[0].image,
    orderData.selectedItems[0].name,
    orderData.selectedItems[0].price,
    orderData.selectedItems[0].sprice,
  ];
  /* const checkResult = await cartCheck(selectedItems); */
  const sql = `
  insert into jb_order(order_number, pid, user_id, qty, total_amount, payment_method, image, name, price, sprice, created_at, updated_at)
  values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now())
  `;

  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;

    if (result_rows > 0) {
      const deleteSql = `
      delete from jb_cart where pid = ? and user_id = ?
      `;
      await db.execute(deleteSql, [
        orderData.selectedItems[0].pid,
        orderData.userId,
      ]);
    }
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};
