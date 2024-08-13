import axios from "axios";
import React from "react";
import { Form } from "react-router-dom";

export default function ProductImgUpload({ getImage }) {
  const formData = new FormData();

  const FileUpload = (e) => {
    formData.append("file", e.target.files[0]); // --> uploadController로 넘어가는 데이터(파일명 등...)
    for (const key of formData)
      console.log(`key---->>> ${JSON.stringify(key)}`);

    //선택한 파일을 서버로 전송
    axios.post("http://127.0.0.1:8080/upload", formData).then((result) => {
      getImage(result.data);
    });
  };

  return (
    <div>
      <input
        type="file"
        className="shadow-none AdminProductList-image-input"
        accept="image/*"
        onChange={(e) => {
          FileUpload(e);
        }}
      />
    </div>
  );
}
