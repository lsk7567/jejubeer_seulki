import React, { useEffect, useState } from "react";
import { MenuMainTitle } from "../../components/MenuTitle";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function NewsWrite() {
  const navigate = useNavigate();
  const [newsFormData, setNewsFormData] = useState({
    title: "",
    content: "",
  });

  /*
   * 폼 데이터 저장 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsFormData({ ...newsFormData, [name]: value });
  };

  /*
   * 다시쓰기 버튼 */
  const handleReset = () => {
    setNewsFormData({
      title: "",
      content: "",
    });
    document.getElementById("title").focus();
  };

  /*
   * 작성 완료 버튼 */
  const handleSubmit = () => {
    const url = "http://localhost:8080/news/write";
    axios({
      method: "post",
      url: url,
      data: newsFormData,
    })
      .then((res) => {
        if (res.data.cnt === 1) {
          alert("게시글이 등록되었습니다.");
          navigate("/news");
        } else alert("error : 게시글 작성에 실패했습니다.");
      })
      .catch((error) => console.log(error));
  };

  // /*
  //  * 버튼 이동 */
  // const handleNavigate = (type) => {
  //   if (type === "list") navigate("/news");
  //   else navigate(`/news/${type}/${nid}`);
  // };

  return (
    <div className="content NewsWrite">
      <MenuMainTitle title="NEWS 게시글 작성" />
      <div className="NewsWrite-table">
        <table border="1px">
          <tbody>
            <tr>
              <th>제목</th>
              <td>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={newsFormData.title}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea
                  name="content"
                  value={newsFormData.content}
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="NewsWrite-btnContainer">
                  <button type="button" onClick={() => navigate("/news")}>
                    리스트 보기
                  </button>
                  <button type="button" onClick={handleReset}>
                    다시쓰기
                  </button>
                  <button type="button" onClick={handleSubmit}>
                    작성완료
                  </button>
                </div>
                {/* <div>
                  <button
                    type="button"
                    onClick={() => handleNavigate("modify")}
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigate("delete")}
                  >
                    삭제
                  </button>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
