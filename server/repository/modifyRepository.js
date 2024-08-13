import { db } from "../db/database_mysql80.js";

// repository.js
export const getUserInfo = async (userId) => {
  try {
    const sql = `select phoneNumber, address, detailaddress from jb_member where user_id = ?`;
    const params = [userId];
    const [rows] = await db.execute(sql, params);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInfo = async ({
  userId,
  phoneNumber,
  address,
  detailAddress,
}) => {
  try {
    const sql = `
      update jb_member 
      set phonenumber = ?, address = ?, detailaddress = ?
      where user_id = ?
    `;
    const params = [phoneNumber, address, detailAddress, userId];

    const [result] = await db.execute(sql, params);
    return result;
  } catch (error) {
    console.log(error);
  }
};
