import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../../css/css_mimi/news.css";
import NewsHeader from "../../../components/components_ryu/NewsHeader";
import axios from "axios";
import { getUser } from "../../../util/localStorage";

export default function NewsDetail() {
  const userInfo = getUser();
  const navigate = useNavigate();
  const { nid, rno } = useParams();
  const [detailData, setDetailData] = useState(null);
  //이전-다음글 저장
  const [prevNextNids, setPrevNextNids] = useState({
    prevNid: null,
    nextNid: null,
  });
  const [prevNextNtitles, setPrevNextNtitles] = useState({
    prevNtitle: "",
    nextNtitle: "",
  });

  /* 데이터 가져오기 */
  useEffect(() => {
    const url = `http://localhost:8080/news/${nid}`;
    axios({
      method: "post",
      url: url,
      data: { nid: nid },
    })
      .then((res) => setDetailData(res.data))
      .catch((error) => console.log(error));
  }, [nid]);

  /*
   * 수정 버튼 */
  const handleModify = () => {};

  /* 이전/다음글 가져오기 */
  useEffect(() => {
    const url = `http://localhost:8080/news/prevNext/${nid}`;
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        // console.log(res.data);
        setPrevNextNids({
          prevNid: res.data["prevNid"],
          nextNid: res.data["nextNid"],
        });
        setPrevNextNtitles({
          prevNtitle: res.data["prevNtitle"],
          nextNtitle: res.data["nextNtitle"],
        });
      })
      .catch((error) => console.log(error));
  }, [nid]);

  const handleNavigate = (type) => {
    let prevRno = parseInt(rno) - 1;
    let nextRno = parseInt(rno) + 1;
    if (type === "prev" && prevNextNids.prevNid !== null)
      navigate(`/news/${prevNextNids.prevNid}/${prevRno}`);
    else if (type === "next" && prevNextNids.nextNid !== null)
      navigate(`/news/${prevNextNids.nextNid}/${nextRno}`);
    else navigate("/news");
  };

  if (!detailData) {
    return <div>Loading...</div>;
  }
  const text = detailData.content;
  const splitText = text.split("\n");

  /*
   * 목록/수정/삭제 버튼 처리 */
  const goToBtn = (type) => {
    if (type === "list") navigate("/news");
    else {
      navigate(`/news/${type}`);
    }
  };

  return (
    <div className="content">
      <NewsHeader />
      <div className="news-detail-post">
        <div className="news-detail-post-title">
          <p>{detailData.title}</p>
          <div className="news-detail-post-writer-box">
            <p className="news-detail-post-writer">제주맥주</p>
            <p className="news-detail-post-date">{detailData.date}</p>
          </div>
        </div>

        <hr />

        <div className="news-detail-content">
          <p className="news-detail-content-text">
            {splitText.map((text) => (
              <p>{text}</p>
            ))}
          </p>
        </div>
        <div className="news-next-menu">
          <FontAwesomeIcon icon={faChevronUp} className="news-next-menu-icon" />
          <p
            className="news-next-menu-text"
            onClick={() => handleNavigate("prev")}
          >
            {prevNextNtitles.prevNtitle}
          </p>
        </div>
        <div className="news-pre-menu">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="news-pre-menu-icon"
          />
          <p
            className="news-pre-menu-text"
            onClick={() => handleNavigate("next")}
          >
            {prevNextNtitles.nextNtitle}
          </p>
        </div>

        <div className="NewsDetail-btns">
          <button
            type="button"
            onClick={() => goToBtn("list")}
            className="news-detail-button"
          >
            목록
          </button>
          {/* {userInfo && userInfo.userId !== "admin" && (
            <div className="NewsDetail-UD-btns">
              <button type="button" onClick={() => goToBtn("modify")}>
                수정
              </button>
              <button type="button" onClick={() => goToBtn("delete")}>
                삭제
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
