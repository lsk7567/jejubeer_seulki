import React, { useEffect, useRef, useState } from "react";
import "../../css/css_ryu/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes, faX } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../../util/localStorage";
import { useNavigate } from "react-router-dom";
import { cartItemAdd } from "../../modules/modules_hidori/reduxCartAxios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { wishItemAdd } from "../../modules/modules_hidori/reduxWishAxios";
import { setWishList } from "../../reducer/reducer_hidori/wishReducer";
import axios from "axios";

export default function ProductInfo({ selectedProduct }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [hoverIconX, setHoverIconX] = useState(false);
  const cartModalBackground = useRef();
  const shareModalBackground = useRef();
  const [cartCount, setCartCount] = useState(1);
  const [bigImg, setBigImg] = useState(1);
  const [isWishCheck, setIsWishCheck] = useState(false);

  let userId = null;
  const user = getUser();
  if (user && user.userInfo) {
    userId = user.userInfo.userId;
  }

  /*
   * addCartItem : 장바구니 추가
   */
  const addCartItem = (id) => {
    if (userId !== null) {
      dispatch(cartItemAdd({ id, userId, qty: cartCount }));
      setCartModalOpen(true);
    } else {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
    }
  };

  /*
   * addWishItem : 위시리스트 추가
   */

  const addWishItem = () => {
    if (userId !== null) {
      setIsWishCheck(true);
    } else {
      alert("로그인 후 위시리스트 추가해주세요.");
      navigate("/login");
    }
    const data = [{ selectedProduct, userId }];
    console.log("data=-->", data);
    const url = "http://localhost:8080/product/wishList";
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        if (res.data.cnt === 1) {
          alert("위시리스트에 추가되었습니다.");
        } else if (res.data.cnt === 0) {
          alert("상품이 이미 위시리스트에 존재합니다.");
        }
      })
      .catch();
  };

  const handleBuyNow = () => {
    if (userId !== null) {
      const payload = {
        selectedItems: [
          {
            cid: null, // 장바구니와의 호환을 위해 null
            image: selectedProduct.image1,
            name: selectedProduct.name,
            pid: selectedProduct.pid, // buy now의 id를 장바구니의 pid로 매핑
            price: selectedProduct.price,
            qty: cartCount,
            rno: null, // 장바구니와의 호환을 위해 null
            sprice: selectedProduct.sprice ?? null,
          },
        ],
        totalAmount:
          (selectedProduct.sprice || selectedProduct.price) * cartCount,
      };

      navigate("/pay", {
        state: payload,
      });
    } else {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
    }
  };

  /*
   * 모달 X 아이콘 플로팅 관리 */
  useEffect(() => {
    setHoverIconX(false);
  }, [shareModalOpen]);

  /*
   * 트위터 공유하기*/
  const twitterShare = () => {
    const url = `https://jejubeer.co.kr/`;
    const text = `${selectedProduct.name}\n`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl);
  };

  /*
   * 페이스북 공유하기 */
  const facebookShare = () => {
    const url = `https://jejubeer.co.kr/`;
    const sharedLink = encodeURIComponent(url);
    const facebookUrl = `http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`;
    window.open(facebookUrl);
  };

  /*
   * 수량 관리 */
  const handleCartCount = (int) => {
    let setCount = cartCount + parseInt(int);
    if (setCount < 1) {
      alert("최소 수량은 1개입니다.");
      setCartCount(1);
    } else if (setCount > 49) {
      alert("50개 이상 주문건은 '업장 및 대량 문의'로 연락바랍니다. ");
    } else {
      setCartCount(setCount);
    }
  };
  const handleTextCartCount = (value) => {
    if (value === "") {
      setCartCount("");
    } else {
      let setTextCartCount = parseInt(value);
      if (!setTextCartCount || setTextCartCount < 1) {
        alert("최소 수량은 1개입니다.");
        setCartCount(1);
      } else if (setTextCartCount > 49) {
        alert("50개 이상 주문건은 '업장 및 대량 문의'로 연락바랍니다. ");
        setCartCount(1);
      } else {
        setCartCount(setTextCartCount);
      }
    }
  };
  const handleBlur = () => {
    if (cartCount === "" || cartCount < 1) {
      setCartCount(1);
    }
  };

  /*
   * url 주소 복사 */
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("주소가 복사되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * 콤마 찍기 */
  const formatPrice = (price) => {
    if (price) {
      return price.toLocaleString();
    }
  };

  return (
    <div className="ProductList-j content">
      <div className="ProductList-j-cartModal-contents">
        <div>
          {selectedProduct.pid >= 11 ? (
            <img
              src={`http://localhost:8080/${selectedProduct.image1}`}
              className="ProductList-j-cartModal-img1"
            />
          ) : selectedProduct.image2 ? (
            <div className="ProductList-j-cartModal-imgContainer">
              <img
                src={selectedProduct.image1}
                alt={selectedProduct.name}
                className={bigImg === 1 ? "ProductList-j-show" : ""}
              />
              {selectedProduct.image2 && (
                <img
                  src={selectedProduct.image2}
                  alt={selectedProduct.name}
                  className={bigImg === 2 ? "ProductList-j-show" : ""}
                />
              )}
            </div>
          ) : (
            <img
              src={selectedProduct.image1}
              className="ProductList-j-cartModal-img1"
            />
          )}
          <div></div>
          {selectedProduct.pid >= 11 ? (
            <img
              className="ProductList-j-cartModal-img2"
              src={`http://localhost:8080/${selectedProduct.image1}`}
              alt={selectedProduct.name}
              onMouseEnter={() => setBigImg(1)}
            />
          ) : (
            <img
              className="ProductList-j-cartModal-img2"
              src={selectedProduct.image1}
              alt={selectedProduct.name}
              onMouseEnter={() => setBigImg(1)}
            />
          )}
          {selectedProduct.image2 && (
            <img
              className="ProductList-j-cartModal-img3"
              src={selectedProduct.image2}
              alt={selectedProduct.name}
              onMouseEnter={() => setBigImg(2)}
            />
          )}
        </div>
        <div className="ProductList-j-cartModal-textContainer">
          <div className="ProductList-j-cartModal-textContainer-div">
            {selectedProduct.name}
            {selectedProduct.badge1 && (
              <img
                src={selectedProduct.badge1}
                alt="badge1"
                className="ProductList-j-cartModal-badge"
              />
            )}
            {selectedProduct.badge2 && (
              <img
                src={selectedProduct.badge2}
                alt="badge2"
                className="ProductList-j-cartModal-badge"
              />
            )}
          </div>

          {/* 가격 */}
          {selectedProduct.sprice ? (
            <div className="ProductList-j-price">
              <div>
                <span className="ProductList-j-modalSprice">
                  {/* {selectedProduct.sprice}원 */}
                  {formatPrice(selectedProduct.sprice)}원
                </span>
                <span className="ProductList-j-modalPrice">
                  {formatPrice(selectedProduct.price)}원
                </span>
              </div>
              <div className="ProductList-j-cartModal-shareContainer">
                <FontAwesomeIcon
                  icon={faShareNodes}
                  className="ProductList-j-cartModal-share"
                  onClick={() => setShareModalOpen(!shareModalOpen)}
                />
                {shareModalOpen && (
                  <div
                    className="ProductList-j-shareModalContainer"
                    ref={shareModalBackground}
                    onClick={(e) => {
                      if (e.target === shareModalBackground.current)
                        setShareModalOpen(false);
                    }}
                  >
                    <div className="ProductList-j-shareModal">
                      <div className="ProductList-j-shareModal-iconX">
                        <span>공유하기</span>
                        <FontAwesomeIcon
                          icon={faX}
                          style={{ color: "#d9d9d9" }}
                          className="ProductList-j-shareModal-x"
                          onMouseEnter={() => setHoverIconX(true)}
                          onMouseLeave={() => setHoverIconX(false)}
                          onClick={(e) => {
                            setShareModalOpen(false);
                            setCartCount(1);
                            setBigImg(1);
                          }}
                        />
                        {hoverIconX && (
                          <div className="ProductList-j-shareModal-closefloat">
                            <span>닫기</span>
                          </div>
                        )}
                      </div>
                      <div className="ProductList-j-shareModal-iconContainer">
                        <span>
                          <KakaoShareButton />
                          <p>카카오톡</p>
                        </span>
                        <span>
                          <img
                            src="\images\images_ryu\facebook_icon.png"
                            alt="facebook_icon"
                            onClick={facebookShare}
                          />
                          <p>페이스북</p>
                        </span>
                        <span>
                          <img
                            src="\images\images_ryu\x_icon.png"
                            alt="x_icon"
                            onClick={twitterShare}
                          />
                          <p>X</p>
                        </span>
                      </div>
                      <div className="ProductList-j-shareModal-copyContainer">
                        <span>
                          http://localhost:3000/product/{selectedProduct.pid}
                        </span>
                        <span
                          onClick={() =>
                            handleCopyClipBoard(
                              `http://localhost:3000/product/${selectedProduct.pid}`
                            )
                          }
                        >
                          복사
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="ProductList-j-price">
              <span className="ProductList-j-modalOnlyPrice">
                {formatPrice(selectedProduct.price)}원
              </span>
              <div className="ProductList-j-cartModal-shareContainer">
                <FontAwesomeIcon
                  icon={faShareNodes}
                  className="ProductList-j-cartModal-share"
                  onClick={() => setShareModalOpen(!shareModalOpen)}
                />
                {shareModalOpen && (
                  <div
                    className="ProductList-j-shareModalContainer"
                    ref={shareModalBackground}
                    onClick={(e) => {
                      if (e.target === shareModalBackground.current)
                        setShareModalOpen(false);
                    }}
                  >
                    <div className="ProductList-j-shareModal">
                      <div className="ProductList-j-shareModal-iconX">
                        <span>공유하기</span>
                        <FontAwesomeIcon
                          icon={faX}
                          style={{ color: "#d9d9d9" }}
                          className="ProductList-j-shareModal-x"
                          onMouseEnter={() => setHoverIconX(true)}
                          onMouseLeave={() => setHoverIconX(false)}
                          onClick={(e) => {
                            setShareModalOpen(false);
                            setCartCount(1);
                            setBigImg(1);
                          }}
                        />
                        {hoverIconX && (
                          <div className="ProductList-j-shareModal-closefloat">
                            <span>닫기</span>
                          </div>
                        )}
                      </div>
                      <div className="ProductList-j-shareModal-iconContainer">
                        <span>
                          <KakaoShareButton />
                          <p>카카오톡</p>
                        </span>
                        <span>
                          <img
                            src="\images\images_ryu\facebook_icon.png"
                            alt="facebook_icon"
                            onClick={facebookShare}
                          />
                          <p>페이스북</p>
                        </span>
                        <span>
                          <img
                            src="\images\images_ryu\x_icon.png"
                            alt="x_icon"
                            onClick={twitterShare}
                          />
                          <p>X</p>
                        </span>
                      </div>
                      <div className="ProductList-j-shareModal-copyContainer">
                        <span>
                          http://localhost:3000/product/{selectedProduct.pid}
                        </span>
                        <span
                          onClick={() =>
                            handleCopyClipBoard(
                              `http://localhost:3000/product/${selectedProduct.pid}`
                            )
                          }
                        >
                          복사
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="ProductList-j-line"></div>
          {/* desc */}
          <div className="ProductList-j-descContainer">
            <div className="ProductList-j-deliveryContainer">
              <p className="ProductList-j-delivery">
                {selectedProduct.desc1}
                <br />
                <span>배송비</span>
                <span>미가입 시 건당 3,000원</span>
              </p>
              <img
                src="https://cdn.imweb.me/upload/S20200702f03eaee38b16e/dd117a759b8a7.png"
                alt="deliveryFeeImg"
              />
              <p>도서 산간 지역은 추가배송비가 부과될 수 있습니다.</p>
            </div>
            {selectedProduct.category === "beer" && (
              <div className="ProductList-j-beerContainer">
                <p>* 굿즈는 별도 발송되어 제주누보와 도착 시점이 상이합니다.</p>
                {selectedProduct.pid === 1 && (
                  <p>
                    * 몬스터팩은 총 2박스로 출고되며 합배송 불가로 도착시점이
                    상이합니다.
                  </p>
                )}
                <div className="ProductList-j-desc-19Container">
                  <div>
                    <img
                      src="https://jejubeer.co.kr/common/img/ico_adult.png"
                      alt="19"
                    />
                    <span>만 19세 이상 성인인증 필수 상품</span>
                  </div>
                  <p>관계법령에 따라 미성년자는 구매할 수 없으며,</p>
                  <p>만 19세 이상 성인인증을 하셔야 구매 가능한 상품입니다.</p>
                </div>
              </div>
            )}
          </div>
          {/* 장바구니용 */}
          <div className="ProductList-j-countContainer">
            <p>수량</p>
            <div className="ProductList-j-countBox">
              <div>
                <button type="button" onClick={() => handleCartCount("-1")}>
                  -
                </button>
                <input
                  type="text"
                  value={cartCount}
                  onChange={(e) => handleTextCartCount(e.target.value)}
                  onBlur={handleBlur}
                />
                <button type="button" onClick={() => handleCartCount("+1")}>
                  +
                </button>
              </div>
              <span className="ProductList-j-countBox-price">
                {selectedProduct.sprice
                  ? formatPrice(selectedProduct.sprice * cartCount)
                  : formatPrice(selectedProduct.price * cartCount)}
                원
              </span>
            </div>
          </div>
          <div className="ProductList-j-finalCharge">
            <span>총 상품금액({cartCount}개)</span>
            <span>
              {selectedProduct.sprice
                ? formatPrice(selectedProduct.sprice * cartCount)
                : formatPrice(selectedProduct.price * cartCount)}
              원
            </span>
          </div>
          <div className="ProductList-j-cartBtns">
            <button type="button" onClick={handleBuyNow}>
              BUY NOW
            </button>
            {cartModalOpen && (
              <div
                className="cart-modal-container"
                ref={cartModalBackground}
                onClick={(e) => {
                  if (e.target === cartModalBackground.current) {
                    setCartModalOpen(true);
                  }
                }}
              >
                <div className="cart-modal-content">
                  <div></div>
                </div>
              </div>
            )}
            <button onClick={() => addCartItem(selectedProduct.pid)}>
              CART
            </button>
            {cartModalOpen && (
              <div
                className="cart-modal-container"
                ref={cartModalBackground}
                onClick={(e) => {
                  if (e.target === cartModalBackground.current) {
                    setCartModalOpen(true);
                  }
                }}
              >
                <div className="cart-modal-content">
                  <div>선택하신 상품을 장바구니에 담았습니다.</div>
                  <div className="cart-modal-content-buttons">
                    <button
                      onClick={() => setCartModalOpen(false)}
                      className="cart-modal-content-shopping"
                    >
                      <span>계속쇼핑</span>
                    </button>
                    <Link to="/cart">
                      <button className="cart-modal-content-cart">
                        장바구니
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <button onClick={() => addWishItem(selectedProduct.pid)}>
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                style={{
                  color: isWishCheck ? "var(--color-warmAqua)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 * 카카오 공유하기 함수 */
const KakaoShareButton = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("aacde6f95328d96acc71a36a67ab28e9"); // 앱 키
    }
  }, []);

  const shareContent = () => {
    window.Kakao.Link.sendCustom({
      templateId: 109655, // 템플릿 ID
      templateArgs: {
        title: "제주맥주",
        description: "맥주보다 맛있는 논알콜 제주누보",
      },
    });
  };

  return (
    <img
      src="\images\images_ryu\kakaotalk_icon.png"
      alt="kakaotalk_icon"
      onClick={shareContent}
    />
  );
};
