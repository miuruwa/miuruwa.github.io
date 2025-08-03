import AboutCommissions from "@blocks/AboutCommissions";
import AboutMe from "@blocks/AboutMe";
import AboutIllustration from "@blocks/AboutIllustration";
import AboutHardware from "@blocks/AboutHardware";
import Meta from "@layout/Meta";
import { page } from "@shared/about";
import { useToolKit } from "@shared/toolkit";
import { useIsMobile } from "@hooks/useIsMobile";

import styles from "./About.module.scss";

const About = () => {
  const { root, aboutContent, infoBlock } = styles;

  const isMobile = useIsMobile(768);
  const toolkit = useToolKit();
  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    <div className={root}>
      {isMobile ? <div className={infoBlock}>
          <AboutMe />
          <AboutIllustration />
          <AboutHardware />
          <AboutCommissions />
        </div> : <div className={aboutContent}>
          <AboutIllustration />
          <div className={infoBlock}>
            <AboutMe />
            <AboutHardware />
            <AboutCommissions />
          </div>
        </div>}
    </div>
  </Meta>
};

export default About;