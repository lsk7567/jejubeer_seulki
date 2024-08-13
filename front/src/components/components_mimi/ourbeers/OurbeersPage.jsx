import React, { useEffect, useState } from 'react';
import { MenuMainTitle, MenuSubTitle } from '../../MenuTitle';
import ShowOurbeers from '../../../pages/pages_mimi/ourbeers/ShowOurbeers';

export default function OurbeersPage() {
  const [ourbeersData, setOurbeersData] = useState([]);

  useEffect(() => {
    fetch('data/data_mimi/ourbeers.json')
      .then(res => res.json())
      .then(result => {
        setOurbeersData(result.ourbeers);
      })
      .catch(error => console.log(error))
  }, []);
  
  console.log('jejuwheat =>', ourbeersData.jejuwheat)

  return (
    <div className='content'>
      <MenuMainTitle title='OUR BEERS'/>
      <MenuSubTitle subtitle='제주맥주는 어떤 맥주를 만들고 있나요?'/>
      <ShowOurbeers showData={ourbeersData.jejuwheat}/>
      <ShowOurbeers showData={ourbeersData.jejupale}/>
      <ShowOurbeers showData={ourbeersData.jejudark}/>
      <ShowOurbeers showData={ourbeersData.jejunouveau}/>
      <ShowOurbeers showData={ourbeersData.jejulager}/>
      <ShowOurbeers showData={ourbeersData.jejubarrel}/>
    </div>
  );
}