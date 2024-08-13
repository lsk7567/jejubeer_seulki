import { db } from "../db/database_mysql80.js";

//TODO 프로그램 예약
export const getTicketing = async (formData) => {
  let result_rows = 0;

  // console.log("Repository ==> ", formData);

  const params = [
    formData[0].formData.name,
    formData[0].formData.email,
    formData[0].formData.phoneNumber1,
    formData[0].formData.phoneNumber2,
    formData[0].formData.phoneNumber3,
    formData[0].title,
    formData[0].pickDate,
    formData[0].pickTime,
    formData[0].list1,
    formData[0].list2,
    formData[0].list3,
    formData[0].total1,
    formData[0].total2,
    formData[0].total3,
    formData[0].totalCount,
    formData[0].payment,
  ];

  // console.log("params!!!", params);

  const sql = `
                  insert into jb_brewery(
                                            b_name,
                                            b_email,
                                            phonenumber1,
                                            phonenumber2,
                                            phonenumber3,
                                            b_title,
                                            pickdate,
                                            picktime,
                                            list1,
                                            list2,
                                            list3,
                                            total1,
                                            total2,
                                            total3,
                                            totalcount,
                                            ticketing_date,
                                            payment
                                          ) 
                                            values( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now(),?)
`;

  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
    // console.log("rows ==>", result.affectedRows);
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows }; // db에서 오류발생시 예약완료페이지로 못넘어감
};

//TODO 프로그램 예약조회
export const getTicketCheck = async (formData) => {
  // console.log("Repository ==> ", formData);

  const params = [
    formData.name,
    formData.phoneNumber1,
    formData.phoneNumber2,
    formData.phoneNumber3,
    formData.cash,
  ];

  // console.log("params!!!", params);

  const sql = `
                  select count(b_name) as cnt from jb_brewery 
                  where b_name= ? 
                  and phonenumber1= ?
                  and phonenumber2= ?
                  and phonenumber3= ?
                  and b_title = ?
`;

  return db.execute(sql, params).then((result) => result[0][0]);
};

//TODO 프로그램 예약조회 상세
export const getTicketDetail = async (formData) => {
  // console.log("Repository ==> ", formData);

  const params = [
    formData[0].name,
    formData[0].phoneNumber1,
    formData[0].phoneNumber2,
    formData[0].phoneNumber3,
    formData[0].cash,
  ];

  // console.log("params!!!", params);

  const sql = `
                select * from jb_brewery 
                where b_name= ? 
                and phonenumber1= ?
                and phonenumber2= ?
                and phonenumber3= ?
                and b_title = ?
`;

  return db.execute(sql, params).then((result) => result[0]);
};

//TODO 프로그램 예약취소
export const getTicketCancle = async (formData) => {
  // console.log("Repository ==> ", formData);

  const params = [
    formData[0].name,
    formData[0].phoneNumber1,
    formData[0].phoneNumber2,
    formData[0].phoneNumber3,
    formData[0].cash,
  ];

  const sql = `
                delete from jb_brewery 
                where b_name= ?
                and phonenumber1= ?
                and phonenumber2= ?
                and phonenumber3= ?
                and b_title = ?
`;

  try {
    const [result] = await db.execute(sql, params);
    if (result.affectedRows > 0) {
      return { cnt: 1 };
    }
  } catch (error) {
    console.error(error);
  }
};

//TODO 프로그램 잔여석 관리
export const getTicketCount = async (formData) => {
  // console.log("Repository ==> ", formData);

  const params = [formData[0], formData[1], formData[2]];
  // console.log("params ===>", params);

  const sql = `
              select ifnull(sum(totalcount),0) as count from jb_brewery 
              where pickdate= ?
              and b_title = ?
              and picktime= ?
`;

  return db.execute(sql, params).then((result) => result[0][0]);
};

//TODO 관리자 예약내역 조회
export const getTicketList = async () => {
  const sql = `
                select * from jb_brewery order by str_to_date(pickdate, '%Y년 %m월 %d일')
`;

  return db.execute(sql).then((result) => result[0]);
};
