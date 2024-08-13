import React, { useEffect, useRef, useState } from "react";
import "../../css/css_ryu/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productListAxios } from "../../modules/modules_ryu/productListAxios";
import BulkPurchace from "./BulkPurchace";
import ProductInfo from "../../components/components_ryu/ProductInfo";

export default function ProductList() {
  // 상품전체리스트
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList.list);

  const [cartModalOpen, setCartModalOpen] = useState(false);
  const modalBackground = useRef();
  const [itemId, setItemId] = useState(null);
  const [cartId, setCartId] = useState("");
  const [hoverIconX, setHoverIconX] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [bigImg, setBigImg] = useState(1);
  // 카테고리
  const [saveCategory, setSaveCategory] = useState("all");
  const [selectedProductList, setSelectedProductList] = useState([]);

  const category = [
    { name: "all", title: "전체" },
    { name: "beer", title: "제주누보(논알콜)" },
    { name: "food", title: "푸드" },
    { name: "md", title: "굿즈" },
  ];

  /*
   * 전체상품 가져오기 */
  useEffect(() => {
    dispatch(productListAxios());
  }, [dispatch]);

  // console.log("productList=>", productList);
  /*
   * 카테고리 필터 */
  useEffect(() => {
    if (saveCategory === "all" || !saveCategory) {
      const rows = [];
      for (let i = 0; i < productList.length; i += 5) {
        rows.push(productList.slice(i, i + 5));
      }
      setSelectedProductList(rows);
    } else {
      const filteredProduct = productList.filter(
        (product) => product.category === saveCategory
      );
      setSelectedProductList(filteredProduct);
    }
  }, [saveCategory, productList]);

  /*
   * 모달 X 아이콘 플로팅 관리 */
  useEffect(() => {
    setHoverIconX(false);
  }, [cartModalOpen]);

  /*
   * 담기 버튼 클릭 시 처리 */
  const handleCartModal = (pid) => {
    setCartId(pid);
    setCartModalOpen(!cartModalOpen);
    hideScroll();
  };

  /*
   * cartModal에 출력할 상품 pid로 거르기 */
  const selectedProduct = productList.find((product) => product.pid === cartId);

  /*
   * 모달 스크롤 제어 */
  const hideScroll = (e) => {
    document.body.style.overflow = "hidden";
  };
  const showScroll = () => {
    document.body.style.overflow = "unset";
  };

  /*
   * 카테고리 */
  const handleCategory = (name) => {
    setSaveCategory(name);
  };

  return (
    <div>
      <div className="productList-j-headerOuter">
        <div className="content">
          <div className="productList-j-header">
            <h1>Online Shop</h1>
            {/* 카테고리 네비게이션 */}
            <ul className="productList-j-ul">
              {category.map((obj) => (
                <li
                  onClick={() => handleCategory(obj.name)}
                  className={`${
                    saveCategory === obj.name
                      ? "productList-j-selectedCategory"
                      : "productList-j-li"
                  }`}
                  key={obj.name}
                >
                  {obj.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* 상품 출력 */}
      <div className="productList-j-contentOuter">
        <div className="content">
          {selectedProductList.length > 0 &&
          Array.isArray(selectedProductList[0]) ? (
            selectedProductList.map((row, index) => (
              <ul className="productList-j-content" key={index}>
                {row.map((obj) => (
                  <li key={obj.pid}>
                    <Link to={`/product/${obj.pid}`}>
                      {obj.pid >= 11 ? (
                        <img
                          src={`http://localhost:8080/${obj.image1}`}
                          className="MainProductList-item-img"
                        />
                      ) : obj.image2 ? (
                        <div className="ProductList-j-imgContainer">
                          <img
                            src={obj.image1}
                            alt={obj.name}
                            className="MainProductList-item-img"
                          />
                          {obj.image2 && (
                            <img
                              onMouseEnter={() => setItemId(obj.pid)}
                              onMouseLeave={() => setItemId(null)}
                              src={obj.image2}
                              alt={obj.name}
                              className={`MainProductList-item-img ${
                                itemId === obj.pid ? "ProductList-j-show" : ""
                              }`}
                            />
                          )}
                        </div>
                      ) : (
                        <img
                          src={obj.image1}
                          className="MainProductList-item-img"
                        />
                      )}
                      <div className="MainProductList-item-div">
                        <p>{obj.name}</p>
                        <p>
                          {obj.sprice ? (
                            <span>{obj.sprice.toLocaleString()}원</span>
                          ) : (
                            <span>{obj.price.toLocaleString()}원</span>
                          )}
                          {obj.sprice && (
                            <span>{obj.price.toLocaleString()}원</span>
                          )}
                        </p>
                      </div>
                    </Link>
                    <div className="productList-cartBtn">
                      <button
                        type="button"
                        onClick={() => handleCartModal(obj.pid)}
                      >
                        담기
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ))
          ) : selectedProductList.length > 0 ? (
            <ul className="productList-j-content">
              {selectedProductList.map((obj) => (
                <li key={obj.pid}>
                  <Link to={`/product/${obj.pid}`}>
                    <img
                      onMouseEnter={() => setItemId(obj.pid)}
                      onMouseLeave={() => setItemId(null)}
                      src={
                        obj.pid >= 11
                          ? `http://localhost:8080/${obj.image1}`
                          : itemId === obj.pid && obj.image2
                          ? obj.image2
                          : obj.image1
                      }
                      className="MainProductList-item-img"
                      alt=""
                    />
                    <div className="MainProductList-item-div">
                      <p>{obj.name}</p>
                      <p>
                        {obj.sprice && (
                          <span>{obj.sprice.toLocaleString()}원</span>
                        )}
                        {obj.price && (
                          <span>{obj.price.toLocaleString()}원</span>
                        )}
                      </p>
                    </div>
                  </Link>
                  <div className="productList-cartBtn">
                    <button
                      type="button"
                      onClick={() => handleCartModal(obj.pid)}
                    >
                      담기
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <BulkPurchace />
          )}

          {/* 모달 */}
          {cartModalOpen && (
            <div
              className="ProductList-j-modalContainer"
              ref={modalBackground}
              onClick={(e) => {
                if (e.target === modalBackground.current) {
                  setCartModalOpen(false);
                  showScroll();
                  setCartCount(1);
                  setBigImg(1);
                }
              }}
            >
              {/* 모달 내용 */}
              <div className="ProductList-j-cartModal">
                <FontAwesomeIcon
                  icon={faX}
                  size="2xl"
                  style={{ color: "#d9d9d9" }}
                  className="ProductList-j-cartModal-x"
                  onMouseEnter={() => setHoverIconX(true)}
                  onMouseLeave={() => setHoverIconX(false)}
                  onClick={(e) => {
                    setCartModalOpen(false);
                    showScroll();
                    setCartCount(1);
                    setBigImg(1);
                  }}
                />
                {hoverIconX && (
                  <div className="ProductList-j-cartModal-closefloat">
                    <span>닫기</span>
                  </div>
                )}
                <ProductInfo selectedProduct={selectedProduct} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
