import React from 'react';
import PolicyTitle from '../../../components/components_mimi/policy/PolicyTitle';
import "../../../css/css_mimi/policy.css";

export default function VideoPolicy() {
  return (
    <div className='content'>
      <PolicyTitle ptitle="영상정보처리기기 운영·관리방침" />
      <p className='policy-text'>제주맥주는 영상정보처리기기 운영·관리방침을 통해 당사에서 처리하는 
        영상정보가 어떠한 용도와 방식으로 이용·관리되고 있는지 알려드립니다.</p>
      <span className='privacy-policy-subtitle'>1. 영상정보처리기기의 설치 근거 및 설치 목적</span>
      <p className='policy-text'>
        당사는 「개인정보보호법」 제25조 제1항에 따라 다음과 같은 목적으로 영상정보처리기기를 설치·운영 합니다.
        <p className='policy-text'>- 시설안전 및 화재 예방</p>
        <p className='policy-text'>- 고객의 안전을 위한 사고 및 범죄 예방</p>
        <p className='policy-text'>- 차량도난 및 파손방지</p>
      </p>
      <span className='privacy-policy-subtitle'>2. 설치 대수, 설치 위치 및 촬영범위</span>
      <table border="1" className='policy-table video-policy-1st-table policy-table-text'>
        <tbody>
          <tr>
            <th>설치 대수</th>
            <th>설치 위치 및 촬영 범위</th>
          </tr>
          <tr>
            <td><span className='policy-emphasis'>64</span>대</td>
            <td>제주맥주 본사 건물 내,외부 및 주차장, 물류창고 등</td>
          </tr>
        </tbody>
      </table>
      <p className='policy-text'>▣ 개인정보보호법 제 25조 5항에 의거 녹음기능을 제외한 화상정보만 촬영하고 있습니다.</p>
      <span className='privacy-policy-subtitle'>3. 관리책임자 및 접근권한자</span>
      <p className='policy-text'>귀하의 영상정보를 보호하고 개인영상정보와 관련한 불만을 처리하기 위하여 아래와 같이 
        개인영상정보 보호책임자를 두고 있으며, 최소한의 인원에게만 접근권한을 부여하여 관리하고 있습니다.</p>
      <table border="1" className='policy-table video-policy-2nd-table policy-table-text'>
        <tbody>
          <tr>
            <th>담당</th>
            <th>이름</th>
            <th>직위</th>
            <th>소속</th>
            <th>연락처</th>
          </tr>
          <tr>
            <td>관리책임자</td>
            <td>인사총무팀 담당자</td>
            <td>대리</td>
            <td>인사총무팀</td>
            <td>064-798-9872</td>
          </tr>
          <tr>
            <td>접근권한자</td>
            <td>제주마케팅팀 담당자</td>
            <td>대리</td>
            <td>인사총무팀</td>
            <td>064-798-9872</td>
          </tr>
        </tbody>
      </table>
      <span className='privacy-policy-subtitle'>4. 영상정보의 촬영시간, 보관기간, 보관장소 및 처리방법</span>
      <table border="1" className='policy-table video-policy-3rd-table policy-table-text'>
        <tbody>
          <tr>
            <th>촬영시간</th>
            <th>보관 기간</th>
            <th>보관 장소</th>
          </tr>
          <tr>
            <td>24시간</td>
            <td>촬영일로부터 45일 이내</td>
            <td>본사 서버실</td>
          </tr>
        </tbody>
      </table>
      <p className='policy-text'>▣ 개인영상정보의 목적 외 이용, 제3자 제공, 파기, 열람 등 요구에 관한 사항을 
        기록·관리하고, 보관기간 만료 시 복원이 불가능한 방법으로 영구 삭제(출력물의 경우 파쇄 또는 소각)합니다.</p>
      <span className='privacy-policy-subtitle'>5. 영상정보처리기기 설치 및 관리 등의 위탁에 관한 사항</span>
      <table border="1" className='policy-table video-policy-4th-table policy-table-text'>
        <tbody>
          <tr>
            <th>수탁업체</th>
            <th>연락처</th>
          </tr>
          <tr>
            <td>SK쉴더스(구.ADT캡스)</td>
            <td>1588-6400</td>
          </tr>
        </tbody>
      </table>
      <span className='privacy-policy-subtitle'>6. 영상정보처리기기 운영·관리방침 변경에 관한 사항</span>
      <p className='policy-text policy-last-text2'>이 영상정보처리기기 운영·관리방침은 2017년 7월 1일에 제정되었으며 
        법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 시행 최소 7일전에 
        본사 홈페이지를 통해 변경사유 및 내용 등을 공지하도록 하겠습니다.</p>
    </div>
  );
}