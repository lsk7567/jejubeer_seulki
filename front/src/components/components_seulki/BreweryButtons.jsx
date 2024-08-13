import React from "react";
import "../../css/css_seulki/seulki.css";
import { Link } from "react-router-dom";

export function BreweryButton1({ name, path }) {
  return (
    <div>
      <Link className="brewery_a" to={path}>
        <button className="brewery_button1">{name}</button>
      </Link>
    </div>
  );
}

export function BreweryButton2() {
  return (
    <div>
      <ul className="brewery_visit_ul">
        <li className="brewery_visit_li">
          <a
            className="brewery_a"
            href="https://map.naver.com/p/entry/place/85279427?placePath=%2Fhome"
            target="_blank"
          >
            <button className="brewery_button2">네이버지도</button>
          </a>
        </li>
        <li className="brewery_visit_li">
          <a
            className="brewery_a"
            href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=1777520112"
            target="_blank"
          >
            <button className="brewery_button2">카카오맵</button>
          </a>
        </li>
      </ul>
    </div>
  );
}
