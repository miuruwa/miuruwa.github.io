import AboutCommissions from "@blocks/AboutCommissions";
import AboutMe from "@blocks/AboutMe";
import AboutIllustration from "@blocks/AboutIllustration";
import AboutHardware from "@blocks/AboutHardware";
import Meta from "@layout/Meta";
import { about } from "@shared/pages/about";
import { useIsMobile } from "@hooks/useIsMobile";

import styles from "./About.module.scss";
import { useTranslation } from "@hooks/useTranslation";

const About = () => {
  const { root, aboutContent, infoBlock } = styles;

  const isMobile = useIsMobile(768);
  const { headline } = useTranslation<Pages.About>(about.translations);

  return <Meta title={headline}>
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