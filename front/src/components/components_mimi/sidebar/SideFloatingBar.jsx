import React, { useEffect, useState } from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../css/css_mimi/sidebar.css';

export default function SideFloatingBar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300){
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /* 페이지 상단으로 이동하기 */
  const ScrollToTop = () => {
    window.scrollTo({top:0, behavior: 'instant'});
  };

  /* URL 버튼 클릭 시 Clipboard로 현재 URL 복사 */
  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert("URL이 클립보드에 복사되었습니다. 원하는 곳에 붙여넣기 해주세요.");
      })
      .catch(error => {
        console.log('URL 복사 실패 : ', error);
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='side-floating-bar'>      
      {isVisible && (
        <>
          <div className='side-floating-url' onClick={copyToClipboard}>
            <p className='side-floating-url-content'>URL</p>
          </div>
          <div className='side-floating-top'
              onClick={ScrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} 
                            className='side-floating-top-content'/>
          </div>
        </>
      )}
    </div>
  );
}