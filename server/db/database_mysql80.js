import mysql from "mysql2";

const pool = mysql.createPool({
  host: "127.0.0.1", // host : "서버주소(ip)" . 실무에서는 cmd창에 ipconfig 입력해서 IPv4에 나온 주소 쓰기
  port: "3306", // 워크벤치 메인에서 확인가능
  user: "root",
  password: "tmfrl119!!",
  database: "jeju_beer",
});

export const db = pool.promise();
