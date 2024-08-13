import React, { useEffect, useState, useRef } from "react";
import { getUser } from "../../../util/localStorage";
import "../../../css/css_hidori/mypageContent.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export function OrderHistory() {
  const [orderList, setOrderList] = useState([]);
  const userId = getUser().userInfo.userId;

  const data = [userId];

  useEffect(() => {
    const url = "http://localhost:8080/mypage/product";

    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        setOrderList(res.data);
      })
      .catch();
  }, []);
  console.log(orderList);

  const formatDate = (datetime) => {
    return new Date(datetime).toISOString().split("T")[0];
  };

  const formatPrice = (price) => {
    return price || price === 0 ? price.toLocaleString() : "0";
  };

  return (
    <div className="mypage-sidebar-content">
      <div className="mypage-sidebar-content-title">
        <span>주문 조회</span>
      </div>
      <div className="mypage-sidebar-content-box">
        <ul>
          {orderList.length > 0 ? (
            orderList.map((list, index) => (
              <li key={index} className="order-list-container">
                <div className="order-list-order-number">
                  <div>
                    주문번호 <span>{list.order_number}</span>
                  </div>
                  <div>
                    주문일자 <span>{formatDate(list.created_at)}</span>
                  </div>
                </div>
                <div className="order-list-box">
                  <img
                    className="order-list-img"
                    src={list.image}
                    alt={list.name}
                  />
                  <div className="order-list-box-text">
                    <div className="order-list-name">{list.name}</div>
                    <div className="order-list-price">
                      {list.sprice && list.sprice > 0 ? (
                        <>{formatPrice(list.sprice * list.qty)}원</>
                      ) : (
                        <>{formatPrice(list.price * list.qty)}원</>
                      )}
                      <span className="order-list-price"> / {list.qty}개</span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="mypage-sidebar-content-box">
              <div>주문 내역이 없습니다.</div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export function Wishlist() {
  const [wishList, setWishList] = useState([]);
  const userId = getUser().userInfo.userId;

  const data = [userId];

  useEffect(() => {
    const url = "http://localhost:8080/mypage/wishlist";

    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        setWishList(res.data);
        /* setWishList(res.data); */
      })
      .catch();
  }, []);
  const formatPrice = (price) => {
    return price ? price.toLocaleString() : "0";
  };

  return (
    <div className="mypage-sidebar-content">
      <div className="mypage-sidebar-content-title-2">
        <span>위시리스트</span>
      </div>
      <div className="mypage-sidebar-content-box">
        <ul className="wish-list">
          {wishList.length > 0 ? (
            wishList.map((wish, index) => (
              <li key={index} className="wish-list-container">
                <Link to={`/product/${wish.pid}`}>
                  <div className="wish-list-img-box">
                    <img
                      src={wish.image}
                      alt={wish.name}
                      className="wish-list-img"
                    />
                  </div>

                  <div className="wish-list-text">
                    <div className="wish-list-name">{wish.name}</div>
                    {wish.sprice && wish.sprice > 0 ? (
                      <span className="wish-list-sprice">
                        {formatPrice(wish.sprice)}원
                      </span>
                    ) : (
                      <span className="wish-list-price">
                        {formatPrice(wish.price)}원
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <div className="mypage-sidebar-content-box">
              <div>위시리스트가 없습니다.</div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export function Inquiry() {
  const [writeBox, setWriteBox] = useState(false);
  const [title, setTitle] = useState("");
  const [submittedContent, setSubmittedContent] = useState(null); // 제출된 내용을 저장할 상태
  const editorRef = useRef();

  const handleToggleEditor = () => {
    setWriteBox(true);
  };

  const handleSubmit = () => {
    const editorInstance = editorRef.current.getInstance();
    const content = editorInstance.getHTML(); // WYSIWYG 모드에서는 getHTML() 사용

    setSubmittedContent({ title, content }); // 제출된 내용을 상태에 저장

    setWriteBox(false); // 에디터 닫기
    setTitle(""); // 제목 초기화
  };

  const handleCancel = () => {
    setWriteBox(false);
    setTitle("");
  };

  return (
    <div className="mypage-sidebar-content">
      <div className="mypage-sidebar-content-title-3">
        <span>1:1 문의게시판</span>
      </div>
      <div className="mypage-sidebar-content-box">
        {submittedContent ? (
          <div className="submitted-content">
            <h3>{submittedContent.title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: submittedContent.content }}
            />
          </div>
        ) : (
          <div>
            {writeBox ? (
              <div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목"
                  className="inquiry-title-input"
                />
                <Editor
                  ref={editorRef}
                  initialEditType="wysiwyg"
                  previewStyle="vertical"
                  height="400px"
                  initialValue="내용을 입력해주세요."
                />
                <div className="editor-buttons">
                  <button
                    onClick={handleSubmit}
                    className="mypage-sidebar-inquiry-submit-button mypage-sidebar-inquiry-button-1"
                  >
                    등록하기
                  </button>
                  <button
                    onClick={handleCancel}
                    className="mypage-sidebar-inquiry-cancel-button mypage-sidebar-inquiry-button-2"
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              <div>등록된 문의가 없습니다.</div>
            )}
          </div>
        )}
      </div>
      {!writeBox && (
        <button
          className="mypage-sidebar-inquiry-button"
          onClick={handleToggleEditor}
        >
          문의 작성
        </button>
      )}
    </div>
  );
}
