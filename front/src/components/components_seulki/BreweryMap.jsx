import React from "react";
import "../../css/css_seulki/seulki.css";
import {
  MapMarker,
  Map,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";

export default function BreweryMap({ width, height }) {
  return (
    <div>
      <Map
        center={{ lat: 33.35845897471383, lng: 126.2412481908698 }}
        style={{ width: width, height: height }}
        draggable={false}
      >
        <MapMarker
          position={{ lat: 33.35845897471383, lng: 126.2412481908698 }}
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            size: {
              width: 24,
              height: 35,
            },
          }}
        ></MapMarker>
        <ZoomControl position={"LEFT"} />
        <MapTypeControl position={"TOPRIGHT"} />
      </Map>
    </div>
  );
}
