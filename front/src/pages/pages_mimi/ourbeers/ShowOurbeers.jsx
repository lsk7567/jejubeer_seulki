import React, { useEffect, useRef, useState } from 'react';
import '../../../css/css_mimi/ourbeers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

export default function ShowOurbeers({showData}) {
  const titleList = ['jejuwheat', 'jejupale', 'jejudark', 'jejunouveau', "jejulager", "jejubarrel"];
  const [title, setTitle] = useState('');
  const name = showData && showData.title;

  console.log('titleList =>', titleList);
  console.log('name =>', name);

  useEffect(() => {
    titleList.map((data) =>
      (data === name) ? setTitle(data) : ''
    )
  }, [showData])

  console.log('title =>', title);
  
  return (
    <div className='content'>

          <Swiper
            className={`ourbeers-main-swiper ${title}`}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={{delay:5000}}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
              {
                showData && showData.slideimagelist.map((main) => (
                  <SwiperSlide>
                    <img
                      className='ourbeers-mainslide-image'
                      src={main.slideimage}
                      alt={main.alt}
                    />
                  </SwiperSlide>
                ))
              }
          </Swiper>

      <div className={`ourbeers-main-swiper-below-box ${title}`}>
        <img src={showData && showData.slideimageproduct}/>
      </div>
      

      <Swiper
          className={`ourbeers-sub-swiper ${title === 'jejulager' || title === 'jejubarrel' ? 'active' : ''}`}
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={3.3}
          loop={true}
          navigation
          autoplay={{delay:4500}}
          centeredSlides={true}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
          {
            showData && showData.subslideimagelist && showData.subslideimagelist.map((sub) => (
              <SwiperSlide>
                  <img
                    className='ourbeers-subslide-image'
                    src={sub.subslideimage}
                    alt={sub.alt}
                  />
              </SwiperSlide>
            ))
          }
          {
            showData && showData.subslideimagelist && showData.subslideimagelist.map((sub) => (
              <SwiperSlide>
                  <img
                    className='ourbeers-subslide-image'
                    src={sub.subslideimage}
                    alt={sub.alt}
                  />
              </SwiperSlide>
            ))
          }
        </Swiper>

      <div className='ourbeers-titleimage-box'>
        <img src={showData && showData.titleimage}
              alt='product-name'
              className='ourbeers-titleimage'/>
      </div>
      <p className='ourbeers-product-info' style={{whiteSpace:'pre-wrap'}}>
        {showData && showData.desc}
      </p>
      <hr className={`ourbeers-info-line ${title}`}></hr>
      <table border="1" className='ourbeers-info-table'>
        <tbody>
          {showData && showData.subdesc1.map((sdata) => (
            <tr>
              <td className={`ourbeers-info-detail ${title}`}>{sdata.data1}</td>
              <td className={`ourbeers-info-detail ${title}`}>{sdata.data2}</td>
              <td className={`ourbeers-info-detail ${title}`}>{sdata.data3}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='ourbeers-ingredient'>
        {
          showData && showData.subdesc2.map((subdesc) => (
            <div>
              <span>{subdesc.subtitle}</span>
              <p style={{whiteSpace:'pre-wrap'}}>{subdesc.subtext}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}