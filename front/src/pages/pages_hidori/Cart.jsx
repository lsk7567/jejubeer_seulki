import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../../util/localStorage";
import { useSelector, useDispatch } from "react-redux";
import {
  cartItemDelete,
  cartListAxios,
} from "../../modules/modules_hidori/reduxCartAxios";
import { MenuMainTitle, MenuSubTitle } from "../../components/MenuTitle";
import "../../css/css_hidori/cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = getUser().userInfo.userId;
  const count = useSelector((state) => state.cart.count || 0);
  const cartList = useSelector((state) => state.cart.list || []);
  const [checkItems, setCheckItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    dispatch(cartListAxios({ userId }));
  }, [dispatch, userId]);

  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [cartList, checkItems]);

  const formatPrice = (price) => {
    return price || price === 0 ? price.toLocaleString() : "0";
  };

  const calculateTotal = () => {
    if (!cartList || !checkItems) return 0;
    return cartList.reduce((total, item) => {
      if (checkItems.includes(item.pid)) {
        const price = item.sprice ?? item.price;
        return total + price * item.qty;
      }
      return total;
    }, 0);
  };

  const handleCheckChange = (id) => {
    setCheckItems((prevCheckItems) => {
      const newCheckItems = prevCheckItems.includes(id)
        ? prevCheckItems.filter((itemId) => itemId !== id)
        : [...prevCheckItems, id];
      console.log("Updated checkItems:", newCheckItems); // 디버깅용 로그
      return newCheckItems;
    });
  };

  const handleSelectAll = (e) => {
    const newCheckItems = e.target.checked
      ? cartList.map((item) => item.pid)
      : [];
    console.log("Select All checkItems:", newCheckItems); // 디버깅용 로그
    setCheckItems(newCheckItems);
  };

  const areAllItemsChecked =
    cartList.length > 0 && checkItems.length === cartList.length;

  const handleDeleteSelected = () => {
    if (checkItems.length === 0) {
      alert("삭제할 항목을 선택해 주세요.");
      return;
    }

    const confirmDelete = window.confirm("선택한 항목을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    dispatch(cartItemDelete({ ids: checkItems, userId }))
      .then(() => {
        // 삭제 성공 시, 체크된 항목들을 초기화하고 장바구니를 새로고침
        setCheckItems([]);
        dispatch(cartListAxios({ userId }));
      })
      .catch((error) => {
        console.error("삭제 중 오류 발생:", error);
        alert("삭제 중 오류가 발생했습니다.");
      });
  };

  const handlePayment = () => {
    if (checkItems.length === 0) {
      alert("주문하실 상품을 선택해주세요.");
      return;
    }

    const selectedItems = cartList.filter((item) =>
      checkItems.includes(item.pid)
    );
    navigate("/pay", {
      state: {
        selectedItems: selectedItems,
        totalAmount: totalAmount,
      },
    });
  };

  return (
    <div>
      <div className="menutitle-margin">
        <MenuMainTitle title="CART" />
        <MenuSubTitle subtitle="당신의 제주는 어떤가요?" />
      </div>
      <div className="content">
        <div>
          <div className="cart-title">
            <p>장바구니</p>
            <p className="cart-count">
              <span>{count}</span>
            </p>
          </div>
          <table className="cart-table">
            <thead>
              <tr className="cart-table-head">
                <td>
                  <input
                    type="checkbox"
                    className="cart-table-head-checkbox"
                    onChange={handleSelectAll}
                    checked={areAllItemsChecked}
                  />
                  상품 정보
                </td>
                <td>수량</td>
                <td>주문금액</td>
                <td>배송정보</td>
              </tr>
            </thead>
            {cartList.length > 0 ? (
              <tbody>
                {cartList.map((item) => (
                  <tr key={item.id} className="cart-table-body">
                    <td className="cart-table-product">
                      <input
                        type="checkbox"
                        checked={checkItems.includes(item.pid)}
                        onChange={() => handleCheckChange(item.pid)}
                        className="cart-table-product-checkbox"
                      />
                      <img
                        src={item.image}
                        style={{ width: "80px" }}
                        alt={item.name}
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="cart-table-product-qty">
                      <div>{item.qty}</div>
                    </td>
                    <td className="cart-table-product-price">
                      {item.sprice && item.sprice > 0 ? (
                        <>{formatPrice(item.sprice * item.qty)}원</>
                      ) : (
                        <>{formatPrice(item.price * item.qty)}원</>
                      )}
                    </td>
                    <td className="cart-table-product-delivery">
                      <div>무료</div>
                      <span>택배</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="4" className="cart-table-empty">
                    <div className="cart-icon">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    <span>장바구니가 비어있습니다.</span>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
          {cartList.length > 0 && (
            <button
              type="button"
              className="cart-table-button"
              onClick={handleDeleteSelected}
            >
              <span>선택상품 삭제</span>
            </button>
          )}

          <table className="cart-total-table">
            <thead>
              <tr className="cart-total-table-title">
                <td>
                  총 주문 상품 <span>{checkItems.length}</span>개
                </td>
              </tr>
            </thead>
            <tbody className="cart-total-table-body">
              <tr>
                <div>
                  <span>{formatPrice(totalAmount)}원</span>
                  <span>+</span>
                  <span>무료</span>
                  <span>=</span>
                  <span>{formatPrice(totalAmount)}원</span>
                </div>
                <div>
                  <span>상품금액</span>
                  <span>배송비</span>
                  <span>총 주문금액</span>
                </div>
              </tr>
            </tbody>
          </table>

          <div className="cart-table-buttons">
            <button
              className="cart-order-button"
              type="button"
              onClick={handlePayment}
            >
              <div>
                <span>주문하기</span>
              </div>
            </button>
            <Link to="/product">
              <div className="cart-table-shopping-button">
                <span>계속 쇼핑하기</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
