import React, { useEffect, useRef, useState } from "react";
import ProductInfo from "../../components/components_ryu/ProductInfo";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  productDetail,
  productListAxios,
} from "../../modules/modules_ryu/productListAxios";
//상세 정보
import ProductDesc_beer, {
  ProductDesc_onlyBeer,
  ProductDesc_gyulChip,
  ProductDesc_gimBugak,
  ProductDesc_rubberCoaster,
  ProductDesc_glass,
  ProductDesc_joyakdol,
} from "./ProductDesc";
import PurchaseReview from "../../components/components_mimi/product/PurchaseReview";
import axios from "axios";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList.list);
  const productDetailList = useSelector((state) => state.productList.detail);
  const { pid } = useParams();
  // 이미지 mouseEnter, Leave 관리
  const [itemId, setItemId] = useState(null);
  // 상세정보, 구매평 이동 위치 관리
  const detailRef = useRef();
  const reviewRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  /*
   * 상품 가져오기 */
  useEffect(() => {
    dispatch(productListAxios());
    dispatch(productDetail({ pid }));
  }, [pid]);

  /*
   * 추천 상품 select하기 */
  // const selectedProduct = productList.find(
  //   (product) => product.pid === parseInt(pid)
  // );
  // console.log("selectedProduct=>", selectedProduct);

  /*
   * 추천 상품  */
  let recommendProduct = [];
  if (productDetailList.category === "beer") {
    recommendProduct = productList.filter(
      (product) => product.pid === 9 || product.category === "food"
    );
  } else if (productDetailList.category === "food") {
    recommendProduct = productList.filter(
      (product) => product.pid === 1 || product.pid === 4 || product.pid === 10
    );
  } else {
    recommendProduct = productList.filter(
      (product) => product.pid === 1 || product.pid === 5 || product.pid === 6
    );
  }

  /*
   * 상세정보, 구매평 이동 */
  const handleRef = (nav) => {
    if (nav === "detail") {
      window.scrollTo({
        top: detailRef.current.offsetTop - 45,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: reviewRef.current.offsetTop - 60,
        behavior: "auto",
      });
    }
  };

  // 스크롤 위치 계산 후 윈도우에 전달
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // 각 div 위치 계산 후 저장
  useEffect(() => {
    const detailTop = detailRef.current.offsetTop;
    const reviewTop = reviewRef.current.offsetTop;

    if (scrollPosition >= reviewTop) {
      setActiveSection("review");
    } else if (scrollPosition >= detailTop) {
      setActiveSection("detail");
    } else {
      setActiveSection("");
    }
  }, [scrollPosition]);

  // 구매평 개수 가져오기
  const [reviewCount, setReviewCount] = useState({});

  useEffect(() => {
    const url = "http://localhost:8080/review/count";
    axios({
      method: "post",
      url: url,
    })
      .then((result) => setReviewCount(result.data))
      .catch((error) => console.log(error));
  }, []);

  // console.log('reviewCount =>', reviewCount);

  return (
    <div className="content">
      {/* 상품 정보 */}
      <ProductInfo selectedProduct={productDetailList} />
      {/* 추천 상품 */}
      <div className="ProductDetail-rProduct-Container">
        <ul className="ProductDetail-rProduct-ul">
          {recommendProduct.map((rProduct) => (
            <li key={rProduct.pid}>
              <Link to={`/product/${rProduct.pid}`}>
                <img
                  onMouseEnter={() => setItemId(rProduct.pid)}
                  onMouseLeave={() => setItemId(null)}
                  src={
                    itemId === rProduct.pid && rProduct.image2
                      ? rProduct.image2
                      : rProduct.image1
                  }
                  alt="rPorduct.img1"
                  className={`${
                    itemId === rProduct.pid && "ProductDetail-rProductImg2"
                  }`}
                />
                <p className="ProductDetail-rProduct-name">{rProduct.name}</p>
                <p>
                  {rProduct.sprice ? (
                    <>
                      <span className="ProductDetail-rProduct-sprice">
                        {rProduct.sprice.toLocaleString()}원
                      </span>
                      <span className="ProductDetail-rProduct-price">
                        {rProduct.price.toLocaleString()}원
                      </span>
                    </>
                  ) : (
                    <span className="ProductDetail-rProduct-onlyPrice">
                      {rProduct.price.toLocaleString()}원
                    </span>
                  )}
                </p>
                {rProduct.badge1 && (
                  <p className="ProductDetail-rProductBadge-Container">
                    <img src={rProduct.badge1}></img>
                    <img src={rProduct.badge2}></img>
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* 상세정보 - 구매평 바 */}
      <div className="ProductDetail-navBar">
        <div
          onClick={() => handleRef("detail")}
          className={`${
            activeSection === "detail"
              ? "borderB"
              : "ProductDetail-navBar-detail"
          }`}
        >
          상세정보
        </div>
        <div
          onClick={() => handleRef("review")}
          className={`${
            activeSection === "review"
              ? "borderB"
              : "ProductDetail-navBar-review"
          }`}
        >
          구매평<span>({reviewCount.rcount})</span>
        </div>
      </div>
      {/* 상세정보 */}
      <div ref={detailRef}>
        {productDetailList.pid < 4 && <ProductDesc_beer />}
        {(productDetailList.pid === 4 || productDetailList.pid === 5) && (
          <ProductDesc_onlyBeer />
        )}
        {productDetailList.pid === 6 && <ProductDesc_gyulChip />}
        {productDetailList.pid === 7 && <ProductDesc_gimBugak />}
        {productDetailList.pid === 8 && <ProductDesc_rubberCoaster />}
        {productDetailList.pid === 9 && <ProductDesc_glass />}
        {productDetailList.pid === 10 && <ProductDesc_joyakdol />}
      </div>
      <div ref={reviewRef}>
        <PurchaseReview />
      </div>
    </div>
  );
}
