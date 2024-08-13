import React from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniTwo } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import { MenuMainTitle } from "../../components/MenuTitle.jsx";
import { useState } from "react";
import BreweryFAQ from "../../components/components_seulki/BreweryFAQ.jsx";
import { BreweryButton2 } from "../../components/components_seulki/BreweryButtons.jsx";
import BreweryMap from "../../components/components_seulki/BreweryMap.jsx";

export default function BreweryVisit() {
  const [showList, setShowList] = useState([
    {
      question: "Q. 제주도민 할인 가능한가요?",
      answer: `1. 양조장투어: 신분증 확인 후 2,000원 현장 할인 \n2. 스페셜투어: 신분증 확인 후 2,000원 현장 할인\n3. 나만의 전용잔 만들기: 신분증 확인 후  2000원 현장 할인\n
* 홈페이지 예약 후 방문할 경우, 신분증 확인 후 2,000원 환불 처리 도와드리고 있습니다.`,
      open: false,
    },
    {
      question: "Q. 투어 프로그램은 언제부터 예약 가능한가요?",
      answer: `매 월 첫째 주 목요일에 다음 달 투어 프로그램이 오픈됩니다.\n
예를 들어, 6월 투어 프로그램 예약을 원하시면 5월 첫째 주 목요일부터 예약 하실 수 있습니다. `,
      open: false,
    },
    {
      question: "Q. 프로그램 참여 제한이 있나요?",
      answer: `1. 양조장 입장: 모든 연령 입장 가능
(미성년자는 부모 동반 없이 입장 불가합니다.)\n\n
2. 양조장 투어 : 만 7세 이상 참여 가능
(0세부터 만 6세의 경우, 보호자 동반이라해도 참여 불가)\n\n
3. 나만의 전용잔 만들기 : 전 연령 참여 가능
(단, 만 12세 이하의 경우 보호자 동반 필수)\n\n
4. 애완동물: 출입금지
(맥주를 생산하는 공간이기에 입장 불가합니다.)`,
      open: false,
    },
    {
      question: "Q. 맥주 외에 마실 음료나 먹을거리가 있나요?",
      answer: `1. 맥주 외 음료: 어린이, 임산부, 차량 운전자 분들을 위해 맥주 대신 착즙 주스가 제공됩니다.\n
2. 스낵: 페어링 키트, 감귤칩, 육포, 소세지 등의 간단한 먹거리 구매 가능합니다.\n
3. 외부 음식: 반입 가능 \n
4. 맥주 테이크 아웃(포장): 불가능\n
(제주맥주 양조장 법적 규제에 따라 맥주 포장 불가합니다.)`,
      open: false,
    },
    {
      question: "Q. 양조장 오시는길",
      answer: `주소: 제주시 한림읍 금능농공길 62-11 3층\n
전화: 000-798-9872 입니다.`,
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setShowList(
      showList.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        }
        return faq;
      })
    );
  };

  return (
    <div>
      <BreweryIntroNav num={1} />
      <BreweryIntroNavMiniTwo num={2} />
      <div className="content breweryvisit">
        <MenuMainTitle title={"FAQ"} />
        <div className="faqs-s">
          {showList.map((faq, index) => (
            <BreweryFAQ
              faq={faq}
              index={index}
              key={index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
        <h1 className="breweryvisit-h1">오시는 길</h1>
        <BreweryMap width={"100%"} height={"320px"} />
        <h4 className="breweryvisit-p">제주시 한림읍 금능농공길 62-11</h4>
        <BreweryButton2 />
      </div>
    </div>
  );
}
