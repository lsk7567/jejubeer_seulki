import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NoticeNavBar({num}) {
  const buttons = [
    { title: "NEWS", href: "/news"},
    { title: "CLUB NOUVEAU", href: "/clubnouveau"}
  ];
  const [activeButton, setActiveButton] = useState(num);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  }

  return (
    <div className='brewery-intor-div'>
      <nav className='brewery-intro-nav'>
        <ul className="brewery-intro-nav-1depth">
          {buttons.map((button, index) => (
            <li 
              className={`my-button-s notice-navbar-button ${activeButton === index ? "active" : ""}`}
              // style={{whiteSpace:'pre-wrap'}}
              onClick={() => handleButtonClick(index)}>
                <Link to={button.href} className='brewery-intro-nav-link'>
                  {button.title}
                </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}