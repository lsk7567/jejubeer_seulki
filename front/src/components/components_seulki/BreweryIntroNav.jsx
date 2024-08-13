import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/css_seulki/seulki.css";

export default function BreweryIntro({ num }) {
  const buttons = [
    { title: "양조장 소개", href: "/brewery/intro" },
    { title: "예약", href: "/brewery/tour/main" },
    { title: "용감한 주방", href: "/brewery/kitchen" },
  ];
  const [activeButton, setActiveButton] = useState(num);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="brewery-intro-div">
      <nav className="brewery-intro-nav">
        <ul className="brewery-intro-nav-1depth">
          {buttons.map((button, index) => (
            <li
              className={`my-button-s ${
                activeButton === index ? "active" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <Link to={button.href} className="brewery-intro-nav-link">
                {button.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
