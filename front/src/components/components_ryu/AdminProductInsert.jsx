import axios from "axios";
import React, { useState } from "react";
import ProductImgUpload from "./ProductImgUpload";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdminProductInsert() {
  const [postImage, setPostImage] = useState([]);
  const navigate = useNavigate();

  /*
   * 이미지 업로드 & 미리보기 */
  // const uploadImg = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     setPostImage(e.target.result);
  //   };

  //   reader.readAsDataURL(file);
  // };

  // console.log(postImage);

  /*
   * submit 등록 -> 서버 전송 */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("폼=>", formDataObject);

    const url = "http://localhost:8080/product/new";
    axios({
      method: "post",
      url: url,
      data: formDataObject,
    })
      .then((res) => {
        // console.log("res받았니?", res.data);
        if (res.data.cnt === 1) {
          alert("상품이 등록되었습니다.");
          window.location.reload();
        } else alert("error : 상품 등록에 실패했습니다.");
      })
      .catch((error) => console.log(error));
  };

  /*
   * 파일업로드 파라미터 함수 : getImage */
  const getImage = (e) => {
    setPostImage(e);
  };

  return (
    <div className="admin-ticket">
      <h1>상품 등록</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <p>판매할 상품의 이미지를 등록해주세요.</p>
            {/* {formDataObject ? (
                      <img
                        src={`http://localhost:8080/${formDataObject.image1}`}
                        alt="previewImg"
                      />
                    ) : (
                      <span>미리보기</span>
                    )} */}
            <ProductImgUpload getImage={getImage} />
            <input type="hidden" name="image1" value={postImage.postImage} />
          </li>
          <li>
            <span>분류</span>
            <select name="category" id="category">
              <option value="beer">beer</option>
              <option value="food">food</option>
              <option value="md">md</option>
            </select>
          </li>
          <li>
            <span>상품명</span>
            <input type="text" name="name" />
          </li>
          <li>
            <span>상품가격</span>
            <input type="text" name="price" />
          </li>
          <li>
            <span>할인가격</span>
            <input type="text" name="sprice" />
          </li>
          <li>
            <span>상품정보</span>
            <input type="text" name="desc1" />
          </li>
        </ul>
        <button type="submit">등록완료</button>
      </form>
    </div>
  );
}
