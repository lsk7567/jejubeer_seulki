import React, { useEffect, useState } from "react";
//페이징 처리
// import Pagination from "rc-pagination";
import Pagination from "react-js-pagination";
import "../../../css/css_mimi/news.css";
import NewsHeader from "../../../components/components_ryu/NewsHeader";
import { getUser } from "../../../util/localStorage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function News() {
  const userInfo = getUser();
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState();
  /* paging - 현재 페이지, 전체행수, 페이지사이즈(한 페이지당 rows수) */
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [totalCount, setTotalCount] = useState(0); //전체 행수 -> DB에서 받아와서 사용
  const [pageSize, setPageSize] = useState(10); //페이지 사이즈
  /* 검색 기능 구현 */
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  let userId = null;
  const user = getUser();
  if (user && user.userInfo) {
    userId = user.userInfo.userId;
  }

  /*
   * 리스트 데이터 가져오기 */
  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;
    startIndex = (currentPage - 1) * pageSize + 1;
    endIndex = currentPage * pageSize;

    const url = "http://localhost:8080/news/list";
    axios({
      method: "post",
      url: url,
      data: { startIndex: startIndex, endIndex: endIndex },
    })
      .then((res) => {
        setNewsList(res.data);
        setTotalCount(res.data[0].total);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  // useEffect(() => {
  //   console.log(totalCount);
  // }, [newsList]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  /*
   * 조회수 업데이트 */
  const updateHits = (nid, rno) => {
    try {
      const url = "http://localhost:8080/news/updateHits";
      axios({
        method: "post",
        url: url,
        data: { nid: nid },
      })
        .then((res) => {
          if (res.data.cnt === 1) {
            navigate(`/news/${nid}/${rno}`);
          } else alert("오류가 발생했습니다.");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * 게시글 검색 */
  const handleSearch = () => {
    if (searchInput) {
      const filteredData = newsList.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      // setNewsList(filteredData);
      setFilteredResults(filteredData);
      setTotalCount(filteredData.length);
      setCurrentPage(1);
    } else {
      setFilteredResults(newsList);
      setTotalCount(newsList.length);
    }
  };

  useEffect(() => {
    console.log(userId);
  }, [userInfo]);

  return (
    <div className="content">
      <NewsHeader />
      <div className="News-writeSearch-btns">
        {userId === "admin" ? (
          <>
            <div className="News-writeBtn">
              <Link to="/news/write">
                <button type="button">글쓰기</button>
              </Link>
            </div>
            <div className="News-search">
              <input
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <div className="News-search-btn">
                <button type="submit" onClick={handleSearch}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="News-only-search">
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="News-search-btn">
              <button type="submit" onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        )}
      </div>
      <table border="1" className="news-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults && filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <tr key={item.rno}>
                <td>{item.rno}</td>
                <td>
                  <span onClick={() => updateHits(item.nid, item.rno)}>
                    {item.title}
                  </span>
                </td>
                <td>제주맥주</td>
                <td>{item.date}</td>
                <td>{item.hits}</td>
              </tr>
            ))
          ) : newsList && newsList.length > 0 ? (
            newsList.map((item) => (
              <tr key={item.rno}>
                <td>{item.rno}</td>
                <td>
                  <span onClick={() => updateHits(item.nid, item.rno)}>
                    {item.title}
                  </span>
                </td>
                <td>제주맥주</td>
                <td>{item.date}</td>
                <td>{item.hits}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">로딩 중...</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        activePage={currentPage} // 현재 페이지
        itemsCountPerPage={pageSize} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={totalCount} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator의 페이지 범위
        prevPageText={"ᐸ"} // "이전"을 나타낼 텍스트
        nextPageText={"ᐳ"} // "다음"을 나타낼 텍스트
        onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        containerClassName={"News-pagination"}
        pageLinkClassName={"News-pagination-link"}
        activeLinkClassName={"News-pagination_link_active"}
      />
      {/* <Pagination
        className="d-flex justify-content-left News-pagenation"
        current={currentPage} //현재 페이지
        total={totalCount} //전체 행 수
        pageSize={pageSize} //페이지 사이즈
        onChange={(page) => setCurrentPage(page)}
      /> */}
    </div>
  );
}
