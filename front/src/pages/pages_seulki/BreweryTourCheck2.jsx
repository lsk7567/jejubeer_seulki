import React, { useState, useEffect } from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BreweryTourCheck2() {
  const location = useLocation();
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const name = location.state.formData.name;
  const cash = location.state.formData.cash;
  const phoneNumber1 = location.state.formData.phoneNumber1;
  const phoneNumber2 = location.state.formData.phoneNumber2;
  const phoneNumber3 = location.state.formData.phoneNumber3;

  const all = [{ name, phoneNumber1, phoneNumber2, phoneNumber3, cash }];

  useEffect(() => {
    const url = "http://127.0.0.1:8080/ticket/ticketdetail";

    axios({
      method: "post",
      url: url,
      data: all,
    })
      .then((res) => {
        setList(res.data);
        setIsLoading(false);

        setTimeout(() => {
          setShowLoading(false);
        }, 100);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setShowLoading(false);
      });
  }, []);

  if (isLoading || showLoading) {
    return (
      <div>
        <BreweryIntroNav num={1} />
        <BreweryIntroNavMiniTwo num={1} />
        <div className="content tour-check1">
          <br />
          <br />
          <br />
          <br />
          <hr className="seulki-line" />
        </div>
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div style={{ margin: "0 auto" }}>데이터를 불러오는 데 실패했습니다.</div>
    );
  }

  const now = new Date();
  const year = now.getFullYear().toString(); // toString()으로 숫자를 문자열로 바꿔주기
  // const month = (now.getMonth() + 1).toString().padStart(2, "0"); // 10이하는 앞에 0붙여서 출력하기
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const display = year.concat("년 ", month, "월 ", date, "일");
  const payDate = list[0].pickdate;

  const handleClick = () => {
    const result = window.confirm("예약을 취소하시겠습니까?");
    if (result) {
      if (payDate === display) {
        alert("이용 당일에는 취소가 불가합니다.");
      } else {
        const url = "http://127.0.0.1:8080/ticket/ticketcancel";

        axios({
          method: "post",
          url: url,
          data: all,
        })
          .then((res) => {
            if (res.data.cnt === 1) {
              alert("예약이 취소되었습니다.\n이전 페이지로 이동합니다.");
              navigate("/brewery/tour/ticketing/check1");
            }
          })
          .catch((error) => console.log(error));
      }
    }
  };

  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={1} />
      <div className="content tour-check1">
        <h1 className="tour-check1-h1">양조장 예약 확인</h1>

        <ul className="tour-check2-ul">
          <li>
            <span className="tour-check2-ul-span">신청자 명</span>
            {list[0].b_name}
          </li>
          <li>
            <span className="tour-check2-ul-span">프로그램 명</span>
            {list[0].b_title}
          </li>
          <li className="seulki-flex">
            <span className="tour-check2-ul-span">프로그램 타입</span>
            <div className="glass-ticket-step3-list-div">
              {list[0].total1 > 0 ? (
                <p className="tour-ticket-step3-list-p">
                  {list[0].list1}
                  <p>{list[0].total1}&nbsp;명</p>
                </p>
              ) : null}

              {list[0].total2 > 0 ? (
                <p className="tour-ticket-step3-list-p">
                  {list[0].list2}
                  <p>{list[0].total2}&nbsp;명</p>
                </p>
              ) : null}

              {list[0].total3 > 0 ? (
                <p className="tour-ticket-step3-list-p">
                  {list[0].list3}
                  <p>{list[0].total3}&nbsp;명</p>
                </p>
              ) : null}
            </div>
          </li>
          <li>
            <span className="tour-check2-ul-span">방문예약일자</span>
            {list[0].pickdate} &nbsp;/&nbsp; {list[0].picktime}
          </li>
          <li>
            <span className="tour-check2-ul-span">총 인원</span>
            {list[0].totalcount} 명
          </li>
          <li>
            <span className="tour-check2-ul-span">핸드폰 번호</span>
            {list[0].phonenumber1}-{list[0].phonenumber2}-{list[0].phonenumber3}
          </li>
          <li>
            <span className="tour-check2-ul-span">결제일자</span>
            {list[0].ticketing_date.slice(0, 10)}
          </li>
          <li>
            <span className="tour-check2-ul-span">결제금액</span>
            {list[0].payment.toLocaleString()} 원
          </li>
        </ul>
        <button type="button" className="tour-check1-btn" onClick={handleClick}>
          예약 취소하기
        </button>
        <br />
        <br />
        <br />
        <br />
        <hr className="seulki-line" />
      </div>
    </div>
  );
}
