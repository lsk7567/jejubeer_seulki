import React from 'react'

const KakaoStart = ()=>
  {
    const Rest_api_key='3da3e056e02695bf2b6e4c7d63736125' //REST API KEY
    const redirect_uri = 'http://localhost:3000/kakao' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <button onClick={handleLogin}>카카오 로그인</button>
    </>
    )

  }
  export default KakaoStart;

