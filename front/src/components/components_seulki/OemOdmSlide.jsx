import React from "react";
import "../../css/css_seulki/seulki.css";

export default function OemOdmSlide() {
  const slides = [
    { img: "/images/images_seulki/oemodm/2.png" },
    { img: "/images/images_seulki/oemodm/3.png" },
    { img: "/images/images_seulki/oemodm/4.png" },
    { img: "/images/images_seulki/oemodm/5.png" },
    { img: "/images/images_seulki/oemodm/6.png" },
    { img: "/images/images_seulki/oemodm/7.png" },
    { img: "/images/images_seulki/oemodm/8.png" },
    { img: "/images/images_seulki/oemodm/9.png" },
  ];

  return (
    <div>
      <div className="wrapper-s">
        <div className="slide_container-s">
          <ul className="slide_wrapper-s">
            <div className="slide-s original-s">
              {slides.map((s, i) => (
                <li key={i}>
                  <div>
                    <img className="oemodm-slide-img" src={s.img} alt="" />
                  </div>
                </li>
              ))}
            </div>
            <div className="slide-s clone-s">
              {slides.map((s, i) => (
                <li key={i}>
                  <div>
                    <img className="oemodm-slide-img" src={s.img} alt="" />
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
