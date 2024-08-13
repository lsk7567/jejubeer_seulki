import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productListAxios } from "../../modules/modules_ryu/productListAxios";

export default function MainProductList() {
  const productList = useSelector((state) => state.productList.list);
  const [itemId, setItemId] = useState(null);
  const dispatch = useDispatch();

  /* 전체 상품 가져오기 */
  useEffect(() => {
    dispatch(productListAxios());
  }, []);

  const rows = [];
  for (let i = 0; i < productList.length; i += 5) {
    rows.push(productList.slice(i, i + 5));
  }

  return (
    <div className="main">
      <div className="content mainProductList">
        <h1>맥주보다 맛있는 논알콜 제주누보</h1>
        <ul className="content MainProductList-items">
          {rows[0] &&
            rows[0].map((obj) => (
              <li key={obj.pid}>
                <Link to={`/product/${obj.pid}`}>
                  <img
                    key={obj.pid}
                    onMouseEnter={() => setItemId(obj.pid)}
                    onMouseLeave={() => setItemId(null)}
                    src={
                      itemId === obj.pid && obj.image2 ? obj.image2 : obj.image1
                    }
                    className="MainProductList-item-img"
                    alt=""
                  />
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
              </li>
            ))}
        </ul>
        <h1>MD</h1>
        <ul className="content MainProductList-items MainProductList-items2">
          {rows[1] &&
            rows[1].map((obj) => (
              <li key={obj.pid}>
                <Link to={`/product/${obj.pid}`}>
                  <img
                    src={obj.image1}
                    alt=""
                    className="MainProductList-item-img"
                  />
                  <div className="MainProductList-item-div">
                    <p>{obj.name}</p>
                    <p>
                      {/* <span>{obj.sprice && obj.sprice.toLocaleString()}원</span> */}
                      {obj.price && <span>{obj.price.toLocaleString()}원</span>}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
