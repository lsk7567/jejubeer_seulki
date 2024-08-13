import React from 'react'
import "../../css/css_hoon/AboutUs.css";

export default function BannerVideo() {
  return (
    <div className="aboutus-video-content">
                <video
                className="aboutus-video"
                src="https://jbimweb.s3.ap-northeast-2.amazonaws.com/video/jb_aboutus_full_low.mp4"
                muted
                playsInline
                loop
                autoPlay>
                </video>
                <div className="aboutus-video-click">
                    <a href="https://youtu.be/nOKw1hXuXus?si=n5ZAkZGaxVuqvdIH"><img src="https://jbimweb.s3.ap-northeast-2.amazonaws.com/resource/images/txt-img-click.png"alt="Click here"/></a>
                </div>
                <div className="aboutus-video-bar">
                    <span>00 : 00</span>
                    <span>00 : 36</span>
                </div>
            </div>
  )
}
