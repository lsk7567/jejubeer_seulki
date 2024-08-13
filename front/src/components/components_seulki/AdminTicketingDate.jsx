import React from "react";
import "../../css/css_seulki/seulki.css";

export function AdminTicketingDate(ticket) {
  const utcDate = new Date(ticket.date);

  // UTC시간 -> 한국 표준시로 변환
  const kDate = utcDate.toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const fDate = kDate.replace(/\. /g, "-");
  const fDate1 = fDate.slice(0, 10);
  const fDate2 = fDate.slice(11, 19);

  return (
    <div>
      {fDate1}&nbsp;{fDate2}
    </div>
  );
}
