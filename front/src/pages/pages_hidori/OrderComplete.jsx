import React from "react";
import { useLocation, Link } from "react-router-dom";
import { getUser } from "../../util/localStorage";
import "../../css/css_hidori/orderComplete.css";

export default function OrderComplete() {
  const location = useLocation();
  const loginInfo = getUser().loginInfo;
  const { orderData } = location.state || { orderData: {} };
  const { totalAmount = 0, orderNumber = "", paymentMethod = "" } = orderData;

  const formatPrice = (price) => {
    return price || price === 0 ? price.toLocaleString() : "0";
  };

  if (!orderData || totalAmount === 0) {
    return <div>주문 정보가 없습니다.</div>;
  }

  return (
    <div className="order-complete">
      <div className="order-complete-content">
        <div className="order-complete-title">
          <h2>주문완료</h2>
          <div>주문은 마이페이지에서 조회 가능합니다.</div>
        </div>
        <div className="order-complete-box">
          <div className="order-complete-box-content-box">
            <table>
              <tbody>
                <tr className="order-content-box">
                  <td className="order-content-box-title">배송지</td>
                  <td className="order-content-box-text">
                    <div>{loginInfo.userName}</div>
                    <div>{loginInfo.phoneNumber}</div>
                    <div>{loginInfo.address}</div>
                  </td>
                </tr>
                <tr className="order-content-box">
                  <td className="order-content-box-title">배송방법</td>
                  <td>택배</td>
                </tr>
                <tr className="order-content-box">
                  <td className="order-content-box-title">주문번호</td>
                  <td>{orderNumber}</td>
                </tr>
                <tr className="order-content-box">
                  <td className="order-content-box-title">결제정보</td>
                  <td>{paymentMethod}</td>
                </tr>
                <tr className="order-content-box">
                  <td className="order-content-box-title">결제금액</td>
                  <td>{formatPrice(totalAmount)}원</td>
                </tr>
              </tbody>
            </table>
            <div className="button-group">
              <Link to="/orderForm">
                <button type="button" className="order-page-button">
                  주문서로
                </button>
              </Link>
              <Link to="/mypage">
                <button type="button" className="mypage-button">
                  마이페이지
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
