import React from "react";
import { useRef } from "react";
import "../../css/css_hoon/AboutUs.css";
import BannerVideo from "../../components/components_hoon/BannerVideo";
import AboutusSubtitle from "../../components/components_hoon/AboutusSubtitle";
import AboutusContent from "../../components/components_hoon/AboutusContent";
import AboutusActivities from "../../components/components_hoon/AboutusActivities";
import AboutusOurteam from "../../components/components_hoon/AboutusOurteam";

export default function AboutUs() {
  const sectionAbout = useRef(null);
  const sectionActivities = useRef(null);
  const sectionOurteam = useRef(null);

  const tosection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="aboutus-container">
      <BannerVideo />
      <div className="aboutus-menu">
        <ul>
          <li onClick={() => tosection(sectionAbout)}>ABOUT US</li>
          <li onClick={() => tosection(sectionActivities)}>ACTIVITIES</li>
          <li onClick={() => tosection(sectionOurteam)}>OUR TEAM</li>
        </ul>
      </div>
      <div ref={sectionAbout}>
        <AboutusSubtitle title="ABOUT US" />
        <AboutusContent />
      </div>
      <div ref={sectionActivities}>
        <AboutusSubtitle
          title="ACTIVITIES"
          subtitle="제주맥주는 어떤문화를 만들고 있나요?"
        />
        <AboutusActivities />
      </div>
      <div ref={sectionOurteam} className="ourteam-list-wrap">
        <AboutusSubtitle
          title="OUR TEAM"
          subtitle="제주의 문화를 만들어가는 다양한 매력의 우리를 만나보세요."
        />
        <AboutusOurteam />
      </div>
    </div>
  );
}
