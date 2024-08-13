import React, { useEffect, useState } from 'react';
import '../../../css/css_mimi/terms.css';

export default function ShowTerms({termsData}) {

  // console.log('termsData =>', termsData);
  // console.log('termsData[0] =>', termsData[0]);

  return (
    <div className='content terms-content-margin'>
      {
        termsData && termsData.map((data) => (
          <ul className='terms-data-box'>
            <li className='terms-data-list'>{data.title}</li>
            {
              data.content.map((cdata) => (
                <>
                  {cdata.subtitle && <p className='terms-subtitle'>{cdata.subtitle}</p>}
                  <ol className='terms-inner-text-box'>
                    {cdata.subcontent && cdata.subcontent.map((scontent) => (
                      <li className='terms-text terms-text-list'>
                        <span>
                          {scontent.info}
                          <ol>
                            {
                              scontent.subcontent2 && scontent.subcontent2.map((scontent2) =>(
                                <li><span>{scontent2.subinfo}</span></li>
                              ))
                            }
                          </ol>
                        </span>
                      </li>
                    ))}
                  </ol>
                </>
              ))
            }
          </ul>
        ))
      }
    </div>
  );

}