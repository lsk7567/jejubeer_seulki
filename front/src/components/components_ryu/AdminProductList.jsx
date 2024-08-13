import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAxios } from "../../modules/modules_ryu/productListAxios";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ProductImgUpload from "./ProductImgUpload";
import "../../css/css_seulki/seulki.css";

export default function AdminProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList.list);
  //모달
  const [savedPid, setSavedPid] = useState("");
  const [modifyModal, setModifyModal] = useState(false);
  const [formData, setFormData] = useState({
    image1: "",
    name: "",
    price: 0,
    sprice: 0,
    desc1: "",
  });
  const [postImage, setPostImage] = useState([]);

  /*
   * 전체 상품 가져오기 */
  useEffect(() => {
    dispatch(productListAxios());
  }, [productList]);

  // useEffect(() => {
  //   setFormData(productList);
  // }, [formData]);

  /*
   * 상품 삭제하기 */
  const handleDelete = (pid) => {
    const url = "http://localhost:8080/product/delete";
    axios({
      method: "post",
      url: url,
      data: { pid: pid },
    })
      .then((res) => {
        if (res.data.cnt === 1) alert("상품이 삭제되었습니다.");
        else alert("error : 실패했습니다.");
      })
      .catch((error) => console.log(error));
  };

  /*
   * 상품 수정 하기 */
  const modifyBtn = (pid) => {
    const selectedProduct = productList.find((product) => product.pid === pid);
    setFormData(selectedProduct);
    setModifyModal(true);
  };

  useEffect(() => {
    console.log(modifyModal);
  }, [modifyModal, formData]);

  // 내용 수정
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "sprice" ? Number(value) : value,
    });
  };

  // 파일업로드 파라미터 함수
  const getImage = (e) => {
    setFormData({ ...formData, image1: e.postImage });
  };

  const handleModify = () => {
    const url = "http://localhost:8080/product/modify";
    axios({
      method: "post",
      url: url,
      data: formData,
    })
      .then((res) => {
        if (res.data.cnt === 1) alert("수정되었습니다.");
        else alert("error : 실패했습니다.");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Admin_ProductList">
      <h1>전체 상품 목록</h1>
      <table className="admin-ticket-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>상품 이미지</th>
            <th>상품명</th>
            <th>상품가격</th>
            <th>할인가격</th>
            <th>상품정보</th>
            <th>재고</th>
            <th>상품등록일</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr>
              <td>{product.pid}</td>
              <td>
                {product.pid >= 11 ? (
                  <img
                    src={`http://localhost:8080/${product.image1}`}
                    alt="productImg"
                  />
                ) : (
                  <img src={product.image1} alt="productImg" />
                )}
              </td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString()}</td>
              {product.sprice ? (
                <td>{product.sprice.toLocaleString()}</td>
              ) : (
                <td>-</td>
              )}
              <td>{product.desc1}</td>
              <td>{product.stock}개</td>
              <td>{product.registration_date}</td>
              <td>
                <button type="type" onClick={() => modifyBtn(product.pid)}>
                  수정
                </button>
                <button type="type" onClick={() => handleDelete(product.pid)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modifyModal === true && (
        <div
          className="AdminProductList-modalContainer"
          onClick={() => setModifyModal(false)}
        >
          <div
            className="AdminProductList-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon
              icon={faX}
              style={{ color: "#d9d9d9" }}
              className="ProductList-j-cartModal-x"
              onClick={() => setModifyModal(false)}
            />
            <ul>
              <p>판매할 상품의 이미지를 등록해주세요.</p>
              <li className="AdminProductList-image-li">
                <ProductImgUpload getImage={getImage} />
                <input
                  type="hidden"
                  name="image1"
                  value={formData.image1}
                  onChange={handleChange}
                />
                {/* <input
                  type="file"
                  name="image1"
                  // value={formData.image1}
                  onChange={handleChange}
                /> */}
              </li>
              <li>
                <span>상품명</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </li>
              <li>
                <span>상품가격</span>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </li>
              <li>
                <span>할인가격</span>
                <input
                  type="text"
                  name="sprice"
                  value={formData.sprice}
                  onChange={handleChange}
                />
              </li>
              <li>
                <span>상품정보</span>
                <input
                  type="text"
                  name="desc1"
                  value={formData.desc1}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <button type="button" onClick={handleModify}>
              수정완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
