import "../css/style.css";

/**
 * 제주맥주 메뉴 메인타이틀
 */
export function MenuMainTitle({ title }) {
  return <span className="menu-main-title">{title}</span>;
}

/**
 * 제주맥주 메뉴 서브타이틀
 */
export function MenuSubTitle({ subtitle }) {
  return <p className="menu-sub-title">{subtitle}</p>;
}
