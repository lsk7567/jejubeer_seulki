import React from 'react';
import { MenuMainTitle, MenuSubTitle } from '../../../components/MenuTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../../css/css_mimi/clubnouveau.css';
import NoticeNavBar from '../../../components/components_mimi/NoticeNavBar';

export default function Clubnouveau() {

  //TODO 서버 연결하기

  const handleWritingClick = () => {
    alert("작성 권한이 없습니다.");
  }

  return (
    <div className='content'>
      <NoticeNavBar num={1}/>
      <div className='clubnouveau-banner-img-box'>
        <img src='https://cdn.imweb.me/thumbnail/20231129/bcefcb631175f.png' 
              alt='clubnouveau-banner'
              className='clubnouveau-banner-img'/>
      </div>
      <MenuMainTitle title="NOTICE"/>
      <MenuSubTitle subtitle="클럽누보의 소식을 알려드립니다."/>
      <div className='clubnouveau-board-img-container'>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/thumbnail/20231218/1a70197e1f87f.png'
                alt='clubnouveau-img-1'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                  안녕하세요 누보어 여러분, 클럽누보 미션 활동이 마감되었습니다! 
                  그동안 많은 관심과 적극적인 활동들에 깊이 감사 드립니다. 제주누보를 
                  무척 즐겨주셔서 제주맥주팀 모두 행복하고 뿌듯한 시간이었습니다✨
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/72beb3db8c63b.png'
                alt='clubnouveau-img-1'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                  안녕하세요! 많이 기다리셨죠!
                  클럽누보 미션 2가지를 공개합니다 :&#41; 
                  딱! 2주간 진행 됩니다. 
                  미션에 성실히 참여해주신 누보어 분들께는 특별한 ❤️연말 선물로 리워드❤️ 가 제공됩니다.
                  정성스럽게 누보 라이프를 공유해주신 분들 중 심사숙고하여 베스트 누보어를 선정합니다. 
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/31516fc899fdb.png'
                alt='clubnouveau-img-1'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                  ※ 마감되었습니다. ※
                  주말이 3번만 지나면 올해가 끝난다는 사실, 알고 계시나요?
                  아쉬운 연말을 보내기 전에, 클럽누보어와 함께 한 해를 되돌아보는 시간을 가져요.
                  ❤️클럽누보 앰버서더 유보라님과 함께하는 2023 회고 워크숍❤️에 초대합니다.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/bdd05bd5a91a5.png'
                alt='clubnouveau-img-7'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                우리 모두 정신을 차려보니 어느새 어른이 되어 있습니다. 시에나님도 마찬가지였어요. 
                육아와 살림의 반복 속에 지쳐가고 열정을 잃기도 했죠. 시에나님은 문득 ‘난 어떤 
                사람일까?’를 알고 싶어졌고 1주일에 하루는 뭐든 도전하기 시작했어요. 토익, 아르바이트, 
                재취업, 인스타그램까지. 
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/e0272810d471c.png'
                alt='clubnouveau-img-6'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                  단풍잎 사이로 비치는 햇빛, 소리만 들어도 시원해지는 한여름의 강변, 
                  뽀득뽀득 밟아보는 눈길. 캠핑 크리에이터 은지님은 이런 풍경들의 일부가 
                  되는 삶을 살고 있습니다. 우연한 계기로 캠핑에 푹 빠졌고, 전국을 유랑하는 
                  캠퍼가 되었죠. 은지님이 생각하는 캠핑의 매력은 ‘세계관의 확장’입니다. 
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/a8af5ae0c3e0a.png'
                alt='clubnouveau-img-5'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                  ‘인테리어’하면 어떤 게 떠오르시나요? SNS를 보다 보면 왠지 오리지널 가구, 
                  조명 하나쯤은 있어야 할 것 같은 부담감이 들죠. 소곤님은 빈티지 커피잔과 
                  컵받침만으로, ‘내가 편한’ 집을 만들기 시작했습니다. 그렇게 작은 시도들이 
                  모여, 1.7만 명이 팔로우하는 공간이 되었어요.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/9c64bd8f23170.png'
                alt='clubnouveau-img-4'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                  우리는 모두 ‘나답게’ 살고 싶습니다. 내 취향과 가치관으로, 나만의 길을 
                  만들길 원하죠. 하지만 바쁜 일상에 치이다 보니, 현실이란 벽을 넘기 참 힘든 것 
                  같아요. 마케터에서 여행자이자 창작자로 변신한 굿수진님은 그런 우리에게 말합니다. 
                  삶은 무한하지 않으니, 원하는 게 있으면 일단 해야 한다고요.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/44c61d5737336.png'
                alt='clubnouveau-img-3'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                내가 진심으로 하고 싶었던 일이 나와 잘 맞지 않는다면 어떻게 해야 할까요? 
                채자영님은 그런 경험 덕분에, 온전히 자신에게 집중하게 됐다고 말합니다. 
                그 과정에서 이야기로 마음을 움직이는 전문가인 ‘스토리젠터’라는 새로운 일을 만들었죠.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/d445bc06eb5d7.png'
                alt='clubnouveau-img-2'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                  ‘잘 산다’라는 건 무엇일까요? 다양한 답이 있겠지만, 결국 내가 원하는 대로 사는 게 
                  우리가 소망하는 삶의 모습일 겁니다. 하지만 내가 어떤 사람인지, 뭘 원하는지 
                  고민하는 것조차 벅찬 현실이죠. 김경희님은 ‘누군가는 그런 질문을 해야 한다.’라는 
                  사명감으로, 2012년 컨셉진을 시작했습니다. 
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='clubnouveau-board-img-item'>
          <Link to=''>
            <img 
                src='https://cdn.imweb.me/upload/S20200702f03eaee38b16e/297d5cdcaa7b1.png'
                alt='clubnouveau-img-1'
                className='clubnouveau-board-img-post'/>
            <div className='clubnouveau-board-img-cover'>
              <div className='clubnouveau-board-img-cover-user'>
                <FontAwesomeIcon icon={faCircleUser} className='clubnouveau-user-icon'/>
                <p>제주맥주</p>
              </div>
              <div className='clubnouveau-board-img-cover-text'>
                <p>
                모두가 ‘더 빨리!’를 외치는 시대입니다. 유튜브, SNS, 책과 클래스까지.
                일과 성장에 가속 페달을 밟으라 말하죠. 마케터였던 보라님도 속도가 중요하다고 믿었습니다. 
                그러다 번아웃을 계기로 모든 걸 내려놓고, 4년간 스스로를 돌아봤죠.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='clubnouveau-button-box'>
        <button type='button' onClick={handleWritingClick}>글쓰기</button>
      </div>
    </div>
  );
}