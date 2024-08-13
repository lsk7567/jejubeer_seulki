import React from "react";
import "../../css/css_hidori/footer.css";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-menu-navigator">
          <Link className="footer-menu-link" to="/aboutus">
            <span>ABOUT US</span>
          </Link>
          <Link className="footer-menu-link" to="/ourbeers">
            <span>OUR BEERS</span>
          </Link>
          <Link className="footer-menu-link" to="/news">
            <span>NEWS</span>
          </Link>
          <Link className="footer-menu-link" to="/contact">
            <span>CONTACT</span>
          </Link>
          <Link className="footer-menu-link" to="/terms">
            <span>이용약관</span>
          </Link>
          <Link className="footer-menu-link" to="/privacypolicy">
            <span className="footer-menu-privacy">개인정보 처리방침</span>
          </Link>
          <Link className="footer-menu-link" to="/videopolicy">
            <span>영상정보 처리방침</span>
          </Link>
          <div className="footer-sns-link">
            <a
              href="https://www.youtube.com/channel/UCVHSuXVobLHYTvcvsYjCncw"
              target="_blank"
            >
              <img
                className="footer-sns-youtube"
                src="https://cdn.imweb.me/upload/S20200702f03eaee38b16e/f553848b58e03.png"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/jejubeerofficial/"
              target="_blank"
            >
              <img
                className="footer-sns-insta"
                src="https://cdn.imweb.me/upload/S20200702f03eaee38b16e/08634a2341636.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="footer-information">
          <div className="footer-information-head">
            <span>제주맥주 주식회사</span>
            <span>대표이사 김뿡뿡</span>
          </div>
          <div>
            본사) 제주특별자치도 제주시 감귤읍 감귤잔치길 서울사무실) 서울특별시
            중구 화강암로 228 동호 38빌딩 6층
          </div>
          <div>
            호스팅 제공자 (주) 2조 사업자등록번호 486-12-34567
            통신판매업신고번호 제 2020-제주감귤-0101호
          </div>
          <div className="footer-information-cs">
            <div>고객센터 02-1234-5678 |</div>
            <a href="mailto:jejubeer@jejubeer.co.kr">jejubeer@jejubeer.co.kr</a>
          </div>
          <div className="footer-information-warning">
            경고: 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신
            중 음주는 기형아 출생 위험을 높입니다.
          </div>
          <div>COPYRIGHT 2021&copy; JEJU BEER COMPANY</div>
        </div>
      </div>
    </div>
  );
}
