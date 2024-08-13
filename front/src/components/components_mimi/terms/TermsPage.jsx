// TermsBar.jsx랑 HomepageTerms.jsx, BreweryTerms.jsx가 한 페이지에 같이 호출되게 할 때 필요할 것 같아서 일단 만들어놓음! 

import React, { useEffect, useState } from 'react';
import ShowTerms from '../../../pages/pages_mimi/terms/ShowTerms';

export default function TermsPage() {
  const [totalTermsData, setTotalTermsData] = useState({});
  const [termsData, setTermsData] = useState([]);
  const [activeButton, setActiveButton] = useState('homepage');

  useEffect(() => {
    fetch('data/data_mimi/terms.json')
      .then(res => res.json())
      .then(result => {
        setTotalTermsData(result);
        setTermsData(result.homepage);
      })
      .catch(error => console.log(error))
  }, []);

  // console.log('homepageterms =>', totalTermsData.homepage);
  // console.log('breweryterms =>', totalTermsData.brewery);

  const handleTerms = (termsName) => {
    if(termsName === 'homepage'){
      setActiveButton(termsName);
      setTermsData(totalTermsData.homepage);
    } else if(termsName === 'brewery'){
      setActiveButton(termsName);
      setTermsData(totalTermsData.brewery);
    }
  } 

  console.log('activeButton =>', activeButton);

  return (
    <div className='content terms-content-border'>
      <div className='terms-button-box'>
        <button type='button' className={`terms-button-cm ${activeButton === 'homepage' ? 'active' : ''}`} 
                onClick={() => handleTerms('homepage')}>홈페이지 이용약관</button>
        <button type='button' className={`terms-button-cm ${activeButton === 'brewery' ? 'active' : ''}`} 
                onClick={() => handleTerms('brewery')}>양조장 이용약관</button>
      </div>
      <ShowTerms termsData={termsData}/>
    </div>
  );
}