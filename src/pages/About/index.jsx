import AboutMe from "@blocks/AboutMe";
import AboutIllustration from "@blocks/AboutIllustration";
import AboutLinks from "@blocks/AboutLinks";
import Meta from "@layout/Meta";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import { useIsMobile } from "@hooks/useIsMobile";

import styles from "./About.module.scss";

const About = () => {
  const { root, aboutContent, infoBlock } = styles;

  const isMobile = useIsMobile(768);
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].about;

  return <Meta title={pageData.title}>
    <div className={root}>
      {isMobile ? <div className={infoBlock}>
          <AboutMe />
          <AboutIllustration />
          <AboutLinks />
        </div> : <div className={aboutContent}>
          <AboutIllustration />
          <div className={infoBlock}>
            <AboutMe />
            <AboutLinks />
          </div>
        </div>}
    </div>
  </Meta>
};

export default About;