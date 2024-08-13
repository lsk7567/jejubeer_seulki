import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, removeUser } from "../../util/localStorage";
import "../../css/css_hidori/header.css";
import { useSelector, useDispatch } from "react-redux";
import { getIsLogout } from "../../modules/modules_hoon/reduxMemberAxios";

export default function Header() {
  const { userInfo, loginInfo } = getUser();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.count);
  const handleLogout = () => {
    dispatch(getIsLogout());
    removeUser();
    alert("로그아웃 성공!");
    navigate("/");
  };

  const handleCart = () => {
    alert("로그인 후 장바구니 이용이 가능합니다");
  };

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-login-navbar">
          <ul className="header-login-navbars">
            {userInfo ? (
              userInfo.userId === "admin" ? (
                <>
                  <li className="header-login-user">{loginInfo.userName}님</li>
                  <Link
                    className="header-login-link"
                    to="/login"
                    onClick={handleLogout}
                  >
                    <li>LOGOUT</li>
                  </Link>
                  <li>
                    <Link className="header-login-link" to="/admin">
                      관리
                    </Link>
                  </li>
                  <li>
                    <Link className="header-login-link" to="/mypage">
                      MYPAGE
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="header-login-user">{loginInfo.userName}님</li>
                  <Link
                    className="header-login-link"
                    to="/login"
                    onClick={handleLogout}
                  >
                    <li>LOGOUT</li>
                  </Link>
                  <li>
                    <Link className="header-login-link" to="/mypage">
                      MYPAGE
                    </Link>
                  </li>
                </>
              )
            ) : (
              <>
                <Link className="header-login-link" to="/login">
                  <li>LOGIN</li>
                </Link>
                <li>
                  <Link className="header-login-link" to="/join">
                    JOIN
                  </Link>
                </li>
              </>
            )}
            {userInfo ? (
              <>
                <Link className="header-login-link" to="/cart">
                  <li>
                    CART
                    <span className="header-login-cart-count">{count}</span>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link className="header-login-link" to="/" onClick={handleCart}>
                  <li>CART</li>
                </Link>
              </>
            )}
          </ul>
        </div>
        {userInfo ? (
          <></>
        ) : (
          <>
            <span className="header-login-balloon">무료배송</span>
          </>
        )}
        <div className="header-logo">
          <Link to="/">
            <img
              className="header-logo-img"
              // src="https://cdn.imweb.me/thumbnail/20240812/7c632291b6d8b.png"
              src="/images/Logo.png"
              alt="logo"
            />
          </Link>
          <div className="mini-navigate-page">
            <Link to="/product">
              <span className="mini-one">논알콜 제주누보 구매</span>
            </Link>
            <Link to="/brewery/tour/main">
              <span className="mini-two">양조장 예약</span>
            </Link>
          </div>
        </div>
        <div className="header-menu-navigator">
          <div className="header-menus">
            <Link className="header-menu-link" to="/ourbeers">
              <span className="header-menu-one">OUR BEERS</span>
            </Link>
            <Link className="header-menu-link" to="/product">
              <span className="header-menu-two">ONLINE-SHOP</span>
            </Link>
            <Link className="header-menu-link" to="/brewery/intro">
              <span className="header-menu-three">BREWERY</span>
            </Link>
            <Link className="header-menu-link" to="/news">
              <span className="header-menu-four">NOTICE</span>
            </Link>
            <Link className="header-menu-link" to="/oemodm">
              <span className="header-menu-five">OEM/ODM</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
