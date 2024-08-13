import React from "react";
import "../../css/css_seulki/seulki.css";

export default function BreweryFAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question-s">{faq.question}</div>
      <div className="faq-answer-s">{faq.answer}</div>
    </div>
  );
}
