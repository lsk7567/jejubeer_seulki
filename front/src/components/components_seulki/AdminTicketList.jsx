import React, { useState, useEffect } from "react";
import "../../css/css_seulki/seulki.css";
import axios from "axios";
import { AdminTicketingDate } from "./AdminTicketingDate.jsx";

export default function AdminTicketList() {
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterList, setFilterList] = useState("all");

  useEffect(() => {
    const url = "http://127.0.0.1:8080/ticket/ticketlist";

    axios({
      method: "post",
      url: url,
    })
      .then((res) => {
        setFormData(res.data);
        setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilter = (type) => {
    const now = new Date();
    let filtered;

    switch (type) {
      case "all":
        filtered = formData;
        break;
      case "future":
        filtered = formData.filter((list) => {
          const pickDateTime = getPickDateTime(list);
          return pickDateTime > now;
        });
        break;
      case "past":
        filtered = formData.filter((list) => {
          const pickDateTime = getPickDateTime(list);
          return pickDateTime <= now;
        });
        break;
      default:
        filtered = formData;
    }

    setFilteredData(filtered);
    setFilterList(type);
  };

  const getPickDateTime = (list) => {
    const dateParts = list.pickdate.split("년 ");
    const year = dateParts[0];
    const monthAndDay = dateParts[1].split("일");
    const monthAndDayParts = monthAndDay[0].trim().split("월");
    const month = monthAndDayParts[0].padStart(2, "0");
    const day = monthAndDayParts[1].trim().padStart(2, "0");

    const [hours, minutes] = list.picktime.split(":");
    return new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
  };

  return (
    <div className="admin-ticket">
      <h1 className="admin-ticket-h1">예약리스트 조회</h1>
      <div className="admin-ticket-btn-div">
        <button type="button" onClick={() => handleFilter("all")}>
          전체 내역 조회
        </button>
        <button type="button" onClick={() => handleFilter("future")}>
          이용 전 내역 조회
        </button>
        <button type="button" onClick={() => handleFilter("past")}>
          이용 후 내역 조회
        </button>
      </div>
      <table className="admin-ticket-table">
        <thead>
          <tr>
            <th>이용일</th>
            <th>이용 시간</th>
            <th>결제일</th>
            <th>예약자</th>
            <th>연락처</th>
            <th>이메일 주소</th>
            <th>프로그램 종류</th>
            <th>예약 상세</th>
            <th>예약인원</th>
            <th>결제금액</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((list, i) => (
            <tr key={i}>
              <td>{list.pickdate}</td>
              <td>{list.picktime}</td>
              <td>
                <AdminTicketingDate date={list.ticketing_date} />
              </td>
              <td>{list.b_name}</td>
              <td>
                {list.phonenumber1}-{list.phonenumber2}-{list.phonenumber3}
              </td>
              <td>{list.b_email}</td>
              <td>{list.b_title}</td>
              <td>
                <ul>
                  <li>
                    {list.total1 > 0 ? (
                      <p>
                        {list.list1}&nbsp;{list.total1}&nbsp;명
                      </p>
                    ) : null}
                  </li>
                  <li>
                    {list.total2 > 0 ? (
                      <p>
                        {list.list2}&nbsp;{list.total2}&nbsp;명
                      </p>
                    ) : null}
                  </li>
                  <li>
                    {list.total3 > 0 ? (
                      <p>
                        {list.list3}&nbsp;{list.total3}&nbsp;명
                      </p>
                    ) : null}
                  </li>
                </ul>
              </td>
              <td>{list.totalcount} 명</td>
              <td>{list.payment.toLocaleString()} 원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
