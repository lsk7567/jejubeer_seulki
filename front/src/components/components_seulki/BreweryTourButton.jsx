import React from "react";
import "../../css/css_seulki/seulki.css";
import { Link } from "react-router-dom";

export default function BreweryTourButton({ name, path }) {
  return (
    <div>
      <nav>
        <ul className="brewerytour-nav-ul">
          <Link to={path}>
            <li className="brewerytour-nav-li">{name}</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
