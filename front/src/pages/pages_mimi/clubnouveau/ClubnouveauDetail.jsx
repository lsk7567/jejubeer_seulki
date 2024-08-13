import React from 'react';
import { MenuMainTitle, MenuSubTitle } from '../../../components/MenuTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import '../../../css/css_mimi/clubnouveau.css';
import NoticeNavBar from '../../../components/components_mimi/NoticeNavBar';
import { useNavigate } from 'react-router-dom';

export default function ClubnouveauDetail() {

  const navigate = useNavigate();

  const gotoNouveauList = () => {
    navigate('/clubnouveau');
  }

  const handleWritingClick = () => {
    alert("작성 권한이 없습니다.");
  }


  return (
    <div className='content'>
      <NoticeNavBar num={1}/>
      <div className='clubnouveau-banner-img-box'>
        <img src='https://cdn.imweb.me/thumbnail/20231129/bcefcb631175f.png' 
              alt='clubnouveau-banner'
              className='clubnouveau-banner-img'
              />
      </div>
      <MenuMainTitle title="NOTICE"/>
      <MenuSubTitle subtitle="클럽누보의 소식을 알려드립니다."/>
      <div className='clubnouveau-detail-post'>
        <div className='clubnouveau-detail-post-title'>
          <p>[클럽누보] 베스트 누보어 발표, 축하드립니다!</p>
          <div className='clubnouveau-detail-post-writer-mainbox'>
            <p>
              <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-detail-user-icon'/>
            </p>
            <div className='clubnouveau-detail-post-writer-subbox'>
              <p className='clubnouveau-detail-post-writer-1'>제주맥주</p>
              <p className='clubnouveau-detail-post-writer-2'>클럽누보</p>
            </div>
          </div>
        </div>

        <hr />

        <img src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/b1cc53132c942.png'
              alt='clubnouveau-notice-image'
              className='clubnouveau-detail-post-main-image'/>
        
        <div className='clubnouveau-detail-content'>
          <p className='clubnouveau-detail-content-text'>
            안녕하세요 누보어 여러분, 클럽누보 미션 활동이 마감되었습니다!<br/>
            그동안 많은 관심과 적극적인 활동들에 깊이 감사 드립니다.<br/>
            제주누보를 무척 즐겨주셔서 제주맥주팀 모두 행복하고 뿌듯한 시간이었습니다. ✨<br/>
            <br/>
            처음 예고되었던 바와 같이, 선택 미션(SNS 공유, 꼬마 한입잔 기획 세트 홍보)에<br/>
            적극적으로 참여하여 베스트 누보어로 선정되신 분들을 발표합니다.<br/>
            다음과 같이 공지된 미션 활동을 기반으로 내부 기준으로 점수 환산, 심사숙고하여 선정되었습니다.<br/>
            <span>1&#41;</span> 한입잔 기획팩 공유<br/>
            <span>2&#41;</span> 인스타 피드, 스토리 공유<br/> 
            <span>3&#41;</span> 외 SNS 활동<br/> 
            <br />
            베스트 누보어가 아니더라도, 제주누보를 멋지게 표현해주신 많은 분들께 <br/>
            진심으로 감사드립니다. 다음에 더 좋은 기회로, 알찬 구성으로 찾아뵙겠습니다!<br/>
          </p>
          <p className='clubnouveau-detail-content-text'>
            <span>&#60; 베스트 누보어 리워드 &#62;</span><br/>
            <span>1&#41;</span> 스테이폴리오 숙박 기프트 카드 (50만원권 / 3명)<br/>
            <span>2&#41;</span> 신세계 백화점 상품권 (10만원권 / 10명)<br/>
            &nbsp;&nbsp;*스테이폴리오 숙박 기프트 카드의 유효기간은 1년입니다.<br/>
            &nbsp;&nbsp;*제세공과금은 클럽누보 측에서 부담합니다. 
          </p>
          <img src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/529ba0478fe58.png'
                alt='winner-list'
                className='clubnouveau-detail-post-sub-image-1'/>
          <p className='clubnouveau-detail-content-text'>
            감사합니다.<br/>
            <span>Cheers to my amazing self,</span><br/>
            제주누보 크루 드림
          </p>
          <img src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/9866461a489fe.png'
                alt='clubnouveau-notice-image'
                className='clubnouveau-detail-post-sub-image-2'
                />
        </div>
        <div className='clubnouveau-next-menu'>
          <FontAwesomeIcon icon={faChevronUp} className='clubnouveau-next-menu-icon'/>
          <p className='clubnouveau-next-menu-text'>
            [클럽누보] 미션 공개 (참여 기간: 12월 1일 ~ 12월 17일)
          </p>
        </div>
        <div className='clubnouveau-pre-menu'>
          <FontAwesomeIcon icon={faChevronDown} className='clubnouveau-pre-menu-icon'/>
          <p className='clubnouveau-pre-menu-text'>
            [클럽누보] 미션 공개 (참여 기간: 12월 1일 ~ 12월 17일)
          </p>
        </div>
        <div className='clubnouveau-detail-button-box'>
          <button type='button' onClick={gotoNouveauList}>목록</button>
          <button type='button' onClick={handleWritingClick}>글쓰기</button>
        </div>
      </div>
    </div>
  );
}