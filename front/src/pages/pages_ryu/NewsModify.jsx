import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NewsModify() {
  const navigate = useNavigate();
  const { nid, rno } = useParams();

  /* 1. 상세보기 */
  const [boardFormData, setBoardFormData] = useState({});

  /* 데이터 가져오기 */
  useEffect(() => {
    const url = `http://localhost:8080/news/${nid}`;
    axios({
      method: "post",
      url: url,
      data: { nid: nid },
    })
      .then((res) => setBoardFormData(res.data))
      .catch((error) => console.log(error));
  }, [nid]);

  console.log("update > boardFormData ->", boardFormData);

  return (
    <div>
      <h1>수정하기</h1>
    </div>
  );
}
