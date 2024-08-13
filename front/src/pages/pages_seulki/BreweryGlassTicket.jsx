import React, { useState, useEffect } from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import BreweryCalender from "../../components/components_seulki/BreweryCalender.jsx";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import BreweryTourNav from "../../components/components_seulki/BreweryTourNav.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BreweryGlassTicket() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedTime, setSelectedTime] = useState(null);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [program, setProgram] = useState({
    "13:00": 5,
    "14:00": 5,
    "15:00": 5,
    "18:00": 5,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // 날짜가 변경될 때마다 모든 시간 슬롯의 잔여석을 초기화
    setProgram({
      "13:00": 5,
      "14:00": 5,
      "15:00": 5,
      "18:00": 5,
    });

    // 모든 시간 슬롯에 대해 잔여석 정보를 가져옴
    timeSlots.forEach((timeSlot) => {
      getSeats(timeSlot);
    });
  }, [selectedDate]);

  const pickDate = format(selectedDate, "yyyy년 M월 d일");

  const list = [
    {
      label: "나만의 전용잔 만들기[맥주]",
      count: counts[0],
      onDecrement: () => handleDecrementCount(0),
      onIncrement: () => handleIncrementCount(0),
    },
    {
      label: "나만의 전용잔 만들기[음료]",
      count: counts[1],
      onDecrement: () => handleDecrementCount(1),
      onIncrement: () => handleIncrementCount(1),
    },
    {
      label: "나만의 전용잔 만들기[논알콜맥주]",
      count: counts[2],
      onDecrement: () => handleDecrementCount(2),
      onIncrement: () => handleIncrementCount(2),
    },
  ];

  const timeSlots = ["13:00", "14:00", "15:00", "18:00"];

  const bTitle = "나만의 전용잔 만들기";

  const getCurrentTime = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes(); // 현재 시간을 분 단위로 변환
  };

  const convertTimeToMinutes = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // 현재 날짜와 선택된 날짜가 같은지 확인
  const isToday = (selectedDate) => {
    const today = new Date();
    return (
      selectedDate.getDate() === today.getDate() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear()
    );
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleDecrementCount = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] === 0) {
        return newCounts;
      } else {
        newCounts[index] -= 1;
        return newCounts;
      }
    });
  };

  const handleIncrementCount = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      const totalCount = newCounts.reduce((a, b) => a + b, 0);
      const availableSeats = selectedTime ? program[selectedTime] : 0;

      if (totalCount === availableSeats) {
        return newCounts;
      } else {
        newCounts[index] += 1;
        return newCounts;
      }
    });
  };

  const handleClick = () => {
    const total = counts.reduce((acc, count) => acc + count, 0);

    const total1 = counts[0];
    const total2 = counts[1];
    const total3 = counts[2];

    const list1 = list[0].label;
    const list2 = list[1].label;
    const list3 = list[2].label;

    if (total === 0) {
      alert("1개 이상 선택해주세요");
    } else {
      alert("예약정보입력 페이지로 이동합니다");
      navigate("/brewery/glass/ticketing2", {
        state: {
          pickDate,
          selectedTime,
          total,
          total1,
          total2,
          total3,
          list1,
          list2,
          list3,
        },
      });
    }
  };

  const getSeats = (t) => {
    const all = [pickDate, bTitle, t];
    const url = "http://127.0.0.1:8080/ticket/ticketcount";

    axios({
      method: "post",
      url: url,
      data: all,
    })
      .then((res) => {
        setProgram((prevProgram) => ({
          ...prevProgram,
          [t]: 5 - res.data.count,
        }));
        setCounts([0, 0, 0]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={0} />
      <div className="content tour-ticket">
        <h1 className="tour-check1-h1">예약하기</h1>
        <BreweryTourNav num={0} />
        <div className="seulki-flex tour-ticket-step1">
          <div className="tour-ticket-step1-div1">
            <div>
              <BreweryCalender onDateSelect={handleDateSelect} />
              <div>
                <p className="tour-ticket-step1-div1-p">
                  [취소/환불안내] <br />
                  - 이용일 기준 1일전 : 결제 금액의 100% 환불
                  <br />- 당일 : 취소/환불 모두 불가
                </p>
              </div>
            </div>
          </div>
          <div className="tour-ticket-step1-div2">
            <div className="seulki-flex tour-ticket-step1-div2-date">
              <FontAwesomeIcon icon={faCalendar} className="brewery-cal-icon" />
              &nbsp;
              {selectedDate && (
                <div className="selected-date-s">
                  {format(selectedDate, "yyyy년 M월 d일")}
                </div>
              )}
            </div>
            <div>
              <ul className="brewery-step1-ul">
                <li className="seulki-flex brewery-step1-ul-li-1">
                  <div className="brewery-step1-ul-li-div">시간 선택</div>
                  <div className="brewery-step1-ul-li-div">잔여석</div>
                </li>

                {timeSlots.map((timeSlot, index) => {
                  const currentTime = getCurrentTime();
                  const slotTime = convertTimeToMinutes(timeSlot);

                  if (isToday(selectedDate) && slotTime <= currentTime) {
                    return null;
                  }

                  return (
                    <li
                      key={index}
                      className="seulki-flex brewery-step1-ul-li-2"
                    >
                      <div className="brewery-step1-ul-li-2-input">
                        <input
                          className="tour-ticket-step1-radio"
                          type="radio"
                          name="time"
                          value={index}
                          onChange={() => {
                            setSelectedTime(timeSlot);
                            getSeats(timeSlot);
                          }}
                        />
                        <span className="brewery-step1-ul-li-2-input-time">
                          {timeSlot}
                        </span>
                      </div>
                      <div className="brewery-step1-ul-li-2-count">
                        <span>{program[timeSlot]}</span>
                      </div>

                      {selectedTime === timeSlot && (
                        <>
                          <ul className="brewery-step1-glass-ul">
                            {list.map((item, index) => (
                              <li
                                key={index}
                                className="seulki-flex brewery-step1-tour-li"
                              >
                                <span className="brewery-step1-btn-div-span2">
                                  {item.label}
                                </span>
                                <div className="brewery-step1-btn-div">
                                  <span
                                    className="brewery-step1-btn"
                                    onClick={item.onDecrement}
                                  >
                                    -
                                  </span>
                                  <span className="brewery-step1-btn-div-span2">
                                    {item.count}
                                  </span>
                                  <span
                                    className="brewery-step1-btn"
                                    onClick={item.onIncrement}
                                  >
                                    +
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>

                          <button
                            type="button"
                            className="brewery-step1-btn2"
                            onClick={handleClick}
                          >
                            예약
                          </button>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
