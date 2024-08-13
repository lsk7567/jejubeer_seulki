import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinStep3() {
  const navigate = useNavigate();
  const [benefit, setBenefit] = useState([]); 

  useEffect(() => {
    axios
      .get('/data/data_hoon/joinbenefit.json') 
      .then(res => setBenefit(res.data)) 
      .catch(error => console.log(error));
  }, []); 

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='joinstep3-content-wrap'>
      <div className='joinstep3-main'>
        <p>제주맥주 회원가입을 축하드립니다.</p>
        <p>이제 집에서 제주를 배달 받아보세요!</p>
      </div>
      <div className='joinstep3-benefit'>
        <span>SMS/E-mail 수신 동의하면 어떤 점이 좋을까요?</span>
        {benefit.map((benefits, index) => (
            <div key={index}>
              <h6>{benefits.no}</h6>
              <p>{benefits.content}</p>
            </div>
          ))}
      </div>
      <div className='joinstep3-sub'>
        <p>
          어디에서도 만나볼 수 없는<br/>
          풍성한 다섯가지 혜택을 누려보세요!
        </p>
      </div>
      <button className='joinstep3-btn' type="button" onClick={handleLogin}>로그인하러가기</button>
    </div>
  );
}
