import React from "react";
import "../../css/css_seulki/seulki.css";
import BreweryIntroNav from "../../components/components_seulki/BreweryIntroNav.jsx";
import { BreweryIntroNavMiniOne } from "../../components/components_seulki/BreweryIntroNavMini.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import YouTube from "react-youtube";

export default function BrewerySpace() {
  return (
    <div>
      <BreweryIntroNav num={0} />
      <BreweryIntroNavMiniOne num={1} />

      <div className="breweryspace-img-div" style={{ height: "640px" }}>
        <img src="/images/images_seulki/breweryspace/1.PNG" alt="" />
      </div>

      <div className="content breweryspace">
        <div className="seulki-flex breweryspace-1">
          <div className="breweryspace-textbox">
            <h1 className="breweryspace-h1">3F</h1>
            <p>
              가장 신선한 제주맥주를 맛 볼 수 있는&nbsp;
              <strong className="breweryintro-text-point">양조장 PUB</strong>
            </p>
            <p>
              맥주를 주제로 다양한 프로그램을 즐길 수 있는&nbsp;
              <strong className="breweryintro-text-point">체험존</strong>
            </p>
            <p>
              그리고 제주맥주 굿즈를 만나볼 수 있는&nbsp;
              <strong className="breweryintro-text-point">브랜드샵</strong>
            </p>
          </div>
          <div className="breweryspace-textbox">
            <h1 className="breweryspace-h1">2F</h1>
            <p>
              맥주가 만들어지는 과정을 오감으로 체험할 수 있는&nbsp;
              <strong className="breweryintro-text-point">투어공간</strong>
            </p>
          </div>
        </div>
        <div>
          <Swiper
            className="space-banner"
            effect={"fade"}
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 4000 }}
          >
            <SwiperSlide>
              <img
                className="space-image"
                src="/images/images_seulki/breweryspace/s1.png"
                alt=""
              />
              <img
                className="space-image-text"
                src="/images/images_seulki/breweryspace/s11.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="space-image"
                src="/images/images_seulki/breweryspace/s2.png"
                alt=""
              />
              <img
                className="space-image-text"
                style={{ marginTop: "-3.5px" }}
                src="/images/images_seulki/breweryspace/s21.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="space-image"
                src="/images/images_seulki/breweryspace/s3.png"
                alt=""
              />
              <img
                className="space-image-text"
                src="/images/images_seulki/breweryspace/s31.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="space-image"
                src="/images/images_seulki/breweryspace/s4.png"
                alt=""
              />
              <img
                className="space-image-text"
                src="/images/images_seulki/breweryspace/s41.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="space-video">
          <YouTube
            videoId="q0gEW2VD9qo"
            opts={{
              width: "1200",
              height: "676",
              playerVars: {
                controls: 0,
                rel: 0,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
