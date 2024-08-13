import { getCookie, removeCookies } from "./cookies.js";

// 로그인하기 ( 회원인지 아닌지 구분해줌 )
export const getUser = () => {
  let userInfo =
    localStorage.getItem("userInfo") && getCookie("x-auth-jwt")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

  let loginInfo = localStorage.getItem("login_token")
    ? JSON.parse(localStorage.getItem("login_token"))
    : null;

  return { userInfo, loginInfo };
};

// 로그아웃 했을때
export const removeUser = () => {
  removeCookies("x-auth-jwt");
  localStorage.clear();
};

// 주문정보 저장
export const saveOrder = (orderData) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(orderData);
  localStorage.setItem("orders", JSON.stringify(orders));
};
