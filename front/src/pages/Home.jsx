import React, { useEffect, useState } from "react";
import MainContents from "../components/components_ryu/MainContents";

export default function Home() {
  return (
    <div>
      <video 
        src="https://jbimweb.s3.ap-northeast-2.amazonaws.com/video/240314_web_main_visual.mp4"
        muted
        playsInline
        loop
        autoPlay
        >
      </video>
      <MainContents />
    </div>
  );
}
