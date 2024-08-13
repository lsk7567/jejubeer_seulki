import { db } from "../db/database_mysql80.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* join-회원가입 */
export const getJoin = async (formData) => {
  let result_rows = 0;
  let month = formData.birthdayMonth.padStart(2, "0");
  let day = formData.birthdayDay.padStart(2, "0");

  console.log("formData ===>", formData);

  const params = [
    formData.userProfile,
    formData.userId,
    formData.userEmail,
    bcrypt.hashSync(formData.userPass, 7),
    formData.userName,
    formData.gender,
    formData.phoneNumber,
    formData.address,
    formData.detailaddress,
    `${formData.birthdayYear}-${month}-${day}`,
  ];

  console.log("params ===>", params);

  const sql = `
    insert into jb_member(
      user_profileimg,
      user_id,
      user_email,
      user_pass,
      user_name,
      gender,
      phonenumber,
      address,
      detailaddress,
      birthday,
      join_date
  )
  values(?,?,?,?,?,?,?,?,?,?,now())
  `;

  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
  return { cnt: result_rows };
};
/* 아이디 중복체크 */
export const getIdCheck = async (userId) => {
  const sql = `
  select count(user_id) cnt from jb_member where user_id = ?
  `;

  return db.execute(sql, [userId]).then((result) => result[0][0]);
};

/* login-로그인 */
export const getLogin = async (userId, userPass) => {
  let login_result = 0;
  let login_token = "";
  let userName = "";
  let userEmail = "";
  let gender = "";
  let phoneNumber = "";
  let address = "";
  let birthday = "";

  const sql = `
    select count(user_id) as cnt, 
      any_value(user_pass) as user_pass,
      any_value(user_name) as user_name,
      any_value(user_email) as user_email,
      any_value(gender) as gender,
      any_value(phoneNumber) as phoneNumber, 
      any_value(address) as address,
      any_value(birthday) as birthday from jb_member
    where user_id = ?
  `;
  try {
    const [rows] = await db.execute(sql, [userId]);
    const result = rows[0];

    if (result.cnt === 1) {
      const isPasswordCorrect = bcrypt.compareSync(userPass, result.user_pass);
      if (isPasswordCorrect) {
        login_result = 1;
        login_token = jwt.sign({ userId: userId }, "cmVhY3QxMjM0Cg==");
        userName = result.user_name;
        userEmail = result.user_email;
        gender = result.gender;
        phoneNumber = result.phoneNumber;
        address = result.address;
        birthday = result.birthday;
      }
    }
  } catch (error) {
    console.log(error);
  }
  return {
    cnt: login_result,
    token: login_token,
    userName: userName,
    userEmail: userEmail,
    gender: gender,
    phoneNumber: phoneNumber,
    address: address,
    birthday: birthday,
  };
};

/* 아이디 찾기 */
export const findUserId = async (userName, phoneNumber) => {
  let result_rows = 0;
  const sql = `
    select user_id from jb_member where user_name = ? and phonenumber = ? 
  `;
  try {
    const [result] = await db.execute(sql, [userName, phoneNumber]);
    result_rows = result.length;
    console.log("rows", result.length);

    if (result_rows === 1) {
      const userId = result[0].user_id;
      console.log("User ID found:", userId);
      return { userId, userName };
    }
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/* 비밀번호 찾기 */
export const findUserPs = async (userId, userName) => {
  const sql = `
    select user_id, user_email 
    from jb_member 
    where user_id = ? and user_name = ?
  `;
  try {
    const [result] = await db.execute(sql, [userId, userName]);
    const result_rows = result.length;
    console.log("Rows found:", result_rows);

    if (result_rows === 1) {
      const foundUserId = result[0].user_id;
      const userEmail = result[0].user_email;
      console.log("User email found:", userId + userEmail);
      return { userId: foundUserId, userName, userEmail, cnt: 1 };
    } else {
      return { cnt: result_rows };
    }
  } catch (error) {
    console.error(error);
  }
};

/* 비밀번호 재설정 */
export const passReset = async (userId, newPassword) => {
  if (!userId || !newPassword) {
    console.log(userId, newPassword);
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const sql = `
    update jb_member
    set user_pass = ?
    where user_ID = ?
  `;
  try {
    const [result] = await db.execute(sql, [hashedPassword, userId]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

/* 비밀번호 재설정 할 아이디 가져오기 */
export const findUserById = async (userId) => {
  const sql = `
    select * from jb_member
    where user_id = ?
  `;
  try {
    const results = await db.query(sql, [userId]);
    return results[0];
  } catch (error) {
    console.log(error);
  }
};

/* 회원탈퇴 */
export const getQuit = async (userId) => {
  const sql = `
    delete from jb_member
    where user_id = ?
  `;
  try {
    const results = await db.query(sql, [userId]);
    return results.affectedRows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

