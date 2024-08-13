import { db } from "../db/database_mysql80.js";

/*
 * 전체 상품 가져오기 */
export const getProductAll = async () => {
  const sql = `select 
      pid, 
      category, 
      image1, image2, 
      name, 
      price, sprice, 
      desc1, desc2, 
      badge1, badge2, 
      stock, 
      date_format(registration_date, '%Y-%m-%d') as registration_date 
    from jb_product`;

  return await db.execute(sql).then((result) => result[0]);
};

/*
 * 상품 상세 가져오기 */
export const getDetailProduct = async (pid) => {
  // const sql = `select * from jb_product where pid = ?`;
  const sql = `select
    pid, category, image1, image2, name, price, sprice, desc1, desc2, badge1, badge2
    from jb_product
    where pid = ?`;

  return await db.execute(sql, [pid]).then((result) => result[0][0]);
};

/*
 * (admin) 신규 상품 등록하기 */
export const insertProduct = async (form) => {
  console.log("레파지토리=>", form);

  let result_rows = 0;

  const formData = [
    form.category,
    form.image1,
    form.name,
    form.price,
    form.sprice,
    form.desc1,
  ];

  const sql = `
  insert into jb_product(category, image1, name, price, sprice, desc1, stock, registration_date)
	values(?,?,?,?,?,?,100,now());
  `;

  try {
    const [rows] = await db.execute(sql, formData);
    // console.log("rows=>", rows);
    result_rows = rows.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/*
 * (admin) 상품 삭제하기 */
export const deleteProduct = async (pid) => {
  // console.log("레파지토리=>", pid);
  let result_rows = 0;
  const sql = `
    delete from jb_product where pid = ?
  `;

  try {
    const [rows] = await db.execute(sql, [pid]);
    result_rows = rows.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/*
 * (admin) 상품 수정하기 */
export const modifyProduct = async (formData) => {
  let result_rows = 0;
  const data = [
    formData.image1,
    formData.name,
    formData.price,
    formData.sprice,
    formData.desc1,
    formData.pid,
  ];
  const sql = `
  update jb_product
    set image1 = ?, name = ?, price = ?, sprice = ?, desc1 = ?
    where pid = ?
  `;

  try {
    const [rows] = await db.execute(sql, data);
    result_rows = rows.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/*
 * 위시리스트 가져오기
 */
export const getWishList = async (selectedProduct) => {
  let result_rows = 0;
  const paramsCheck = [
    selectedProduct[0].selectedProduct.pid,
    selectedProduct[0].userId,
  ];
  const sqlCheck = `
    SELECT * FROM jb_wish WHERE user_id = ? AND pid = ?
  `;

  const params = [
    selectedProduct[0].selectedProduct.pid,
    selectedProduct[0].selectedProduct.name,
    selectedProduct[0].selectedProduct.image1,
    selectedProduct[0].selectedProduct.price,
    selectedProduct[0].selectedProduct.sprice,
    selectedProduct[0].userId,
  ];

  const sql = `
    INSERT INTO jb_wish(pid, name, image, price, sprice, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  try {
    const [checkResult] = await db.execute(sqlCheck, paramsCheck);

    if (checkResult.length > 0) {
      // 중복된 경우
      return { cnt: 0, message: "상품이 이미 위시리스트에 존재합니다." };
    }

    // 중복이 아닌 경우, 상품 추가
    const [insertResult] = await db.execute(sql, params);
    const result_rows = insertResult.affectedRows;
    return { cnt: result_rows };
  } catch (error) {
    console.log(error);
    return { cnt: 0, message: "서버 오류 발생" };
  }
};
