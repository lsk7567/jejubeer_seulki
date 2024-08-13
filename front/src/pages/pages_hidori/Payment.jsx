import React, { useState, useEffect } from "react";
import { getUser } from "../../util/localStorage";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/css_hidori/payment.css";
import axios from "axios";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const loginInfo = getUser().loginInfo;
  const userInfo = getUser().userInfo;
  const userId = getUser().userInfo.userId;
  const { selectedItems, totalAmount } = location.state || {
    selectedItems: [],
    totalAmount: 0,
  };

  const [isChecked, setIsChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("신용카드");

  useEffect(() => {
    console.log("Selected Items:", selectedItems); // 로그 추가
    console.log("Total Amount:", totalAmount); // 로그 추가
  }, [selectedItems, totalAmount]);

  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handlePaymentClick = () => {
    if (!isChecked) {
      alert("구매조건 확인 및 결제진행에 동의하여 주시기 바랍니다.");
      return;
    }
    const orderNumber = generateOrderNumber();
    const orderData = {
      orderNumber,
      selectedItems,
      totalAmount,
      userId,
      paymentMethod: paymentMethod,
    };

    console.log("Order Data:", orderData); // 로그 추가

    const url = "http://localhost:8080/cart/order";
    axios
      .post(url, orderData)
      .then((res) => {
        if (res.data.cnt === 1) {
          alert("결제가 완료되었습니다.");
          navigate("/orderComplete", { state: { orderData } });
        } else {
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      })
      .catch((error) => {
        console.error("결제 오류:", error);
        alert("결제 처리 중 오류가 발생했습니다.");
      });
  };

  const generateOrderNumber = () => {
    return new Date().getTime();
  };

  const formatPrice = (price) => {
    return price ? price.toLocaleString() : "0";
  };

  return (
    <div className="payment">
      <h1>결제하기</h1>
      <div className="payment-container">
        <div className="payment-container-box-1">
          <div className="payment-item">
            <div className="payment-item-box">
              <h3>주문 상품 정보</h3>
              {selectedItems.map((item) => (
                <div key={item.id} className="payment-item-info">
                  <div className="payment-item-info-container">
                    <tr className="payment-item-info-box">
                      <img
                        src={item.image}
                        alt="product-image"
                        className="payment-item-image"
                      />
                      <div>
                        <div className="payment-item-name">{item.name}</div>
                        <div className="payment-item-qty">{item.qty}개</div>
                        <div className="payment-item-total">
                          {item.sprice && item.sprice > 0 ? (
                            <>{formatPrice(item.sprice * item.qty)}원</>
                          ) : (
                            <>{formatPrice(item.price * item.qty)}원</>
                          )}
                        </div>
                      </div>
                    </tr>
                    <div className="payment-item-info-delivery-free">
                      배송비 <span>무료</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="payment-item">
            <div className="payment-item-box">
              <h3>주문자 정보</h3>
              <div className="order-sumup">
                <div>{loginInfo.userName}</div>
                <div>{loginInfo.phoneNumber}</div>
                <div>
                  {userInfo.userId}
                  {loginInfo.userEmail}
                </div>
              </div>
            </div>
          </div>
          <div className="payment-item">
            <div className="payment-item-box">
              <h3>배송 정보</h3>
              <div className="delivery-info">
                <div>{loginInfo.userName}</div>
                <div>{loginInfo.phoneNumber}</div>
                <div>{loginInfo.address}</div>
              </div>
              <div className="delivery-memo">
                <div>배송메모</div>
                <select name="delivery-memo-box" id="memo">
                  <option value="default">배송메모를 선택해 주세요.</option>
                  <option value="contact-01">
                    배송 전에 미리 연락 바랍니다.
                  </option>
                  <option value="contact-02">
                    부재시 경비실에 맡겨주세요.
                  </option>
                  <option value="contact-03">
                    부재시 전화나 문자를 남겨주세요.
                  </option>
                  <option value="direct">직접입력</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-container-box-2">
          <div className="payment-item">
            <div className="payment-item-box">
              <h3>주문 요약</h3>
              <div className="order-sumup">
                <div>
                  <div>상품가격</div>
                  <span>{formatPrice(totalAmount)}원</span>
                </div>
                <div>
                  <div>배송비</div>
                  <span>무료</span>
                </div>
                <div className="total-amount">
                  <div>총 주문금액</div>
                  <span>{formatPrice(totalAmount)}원</span>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-item">
            <div className="payment-item-box">
              <h3>결제수단</h3>
              <div className="payment-method">
                <label>
                  <input
                    type="radio"
                    name="method"
                    value="신용카드"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    defaultChecked
                  />
                  <span>신용카드</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="method"
                    value="가상계좌"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>가상계좌</span>
                </label>
              </div>
            </div>
          </div>
          <div className="payment-item payment-condition">
            <div className="payment-item-box">
              <label>
                <input
                  type="checkbox"
                  className="payment-checkbox"
                  checked={isChecked}
                  onChange={handleCheckBoxChange}
                />
                <span>구매조건 확인 및 결제진행에 동의</span>
              </label>
            </div>
            <button
              className="payment-button"
              type="button"
              onClick={handlePaymentClick}
            >
              <span>결제하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
