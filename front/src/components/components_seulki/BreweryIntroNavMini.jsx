import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/css_seulki/seulki.css";

export function BreweryIntroNavMiniOne({ num }) {
  const buttons = [
    { title: "양조장 소개", href: "/brewery/intro" },
    { title: "공간 소개", href: "/brewery/space" },
  ];

  const [activeButton, setActiveButton] = useState(num);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <ul className="seulki-flex brewery-intro-nav-2depth">
        {buttons.map((button, index) => (
          <Link
            className={`brewery-intro-nav-2depth-link ${
              activeButton === index ? "active" : ""
            }`}
            to={button.href}
            onClick={() => handleButtonClick(index)}
          >
            <li>{button.title}</li>
          </Link>
        ))}
      </ul>
      <hr className="seulki-line" />
    </div>
  );
}

export function BreweryIntroNavMiniTwo({ num }) {
  const buttons = [
    { title: "프로그램 예약", href: "/brewery/tour/main" },
    { title: "예약 확인/취소", href: "/brewery/tour/ticketing/check1" },
    { title: "방문 안내", href: "/brewery/visit" },
  ];

  const [activeButton, setActiveButton] = useState(num);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <ul className="seulki-flex brewery-intro-nav-2depth-2">
        {buttons.map((button, index) => (
          <Link
            className={`brewery-intro-nav-2depth-link ${
              activeButton === index ? "active" : ""
            }`}
            to={button.href}
            onClick={() => handleButtonClick(index)}
          >
            <li>{button.title}</li>
          </Link>
        ))}
      </ul>
      <hr className="seulki-line" />
    </div>
  );
}
