import React, { useEffect, useState } from "react";
import "../../css/css_ryu/admin.css";
import AdminProductList from "../../components/components_ryu/AdminProductList";
import AdminProductInsert from "../../components/components_ryu/AdminProductInsert";
import { getUser } from "../../util/localStorage";
import AdminTicketList from "../../components/components_seulki/AdminTicketList.jsx";
import "../../css/css_seulki/seulki.css";

export default function Administration() {
  const { userInfo, loginInfo } = getUser();
  const [activeCategory, setActiveCategory] = useState("productList");

  // console.log(userInfo.userId);

  return (
    <div className="content Admin">
      {userInfo ? (
        userInfo.userId !== "admin" ? (
          <div className="Admin-stop">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2001/2001386.png"
              alt="stopImg"
            />
            <h1>관리자 로그인이 필요한 페이지입니다.</h1>
          </div>
        ) : (
          <>
            <h1>제주맥주 관리자 페이지</h1>
            <div className="Admin-mainContainer">
              <div className="Admin-category">
                <button
                  type="button"
                  onClick={() => setActiveCategory("productList")}
                  className="admin-btn-s"
                >
                  상품 조회
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory("productInsert")}
                  className="admin-btn-s"
                >
                  상품 등록
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory("ticketList")}
                  className="admin-btn-s"
                >
                  예약 리스트
                </button>
                {/* <button
                  type="button"
                  onClick={() => setActiveCategory("board")}
                >
                  게시물 관리
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory("member")}
                >
                  회원 관리
                </button> */}
              </div>
              <div className="Admin-contentContainer">
                {activeCategory === "productList" && <AdminProductList />}
                {activeCategory === "productInsert" && <AdminProductInsert />}
                {activeCategory === "ticketList" && <AdminTicketList />}
                {/* {activeCategory === "board" && (
                  <div>
                    <h1>새글 등록</h1>
                  </div>
                )}
                {activeCategory === "member" && (
                  <div>
                    <h1>회원 목록</h1>
                  </div>
                )} */}
              </div>
            </div>
          </>
        )
      ) : (
        <div className="Admin-stop">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2001/2001386.png"
            alt="stopImg"
          />
          <h1>관리자 로그인이 필요한 페이지입니다.</h1>
        </div>
      )}
    </div>
  );
}
