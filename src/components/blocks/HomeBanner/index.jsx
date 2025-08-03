import BannerBackground from "@blocks/BannerBackground";
import Headline from "@blocks/Headline";
import HomeIllustration from "@blocks/HomeIllustration";
import { useIsMobile } from "@hooks/useIsMobile";
import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/home";

import styles from "./HomeBanner.module.scss";

const HomeBanner = () => {
  const { root, data, desktopPage } = styles;

  const isMobile = useIsMobile(768);
  const toolkit = useToolKit()
  
  const pageData = page[toolkit.settings.language]

  return <div className={root}>
    <BannerBackground />
    {isMobile ? <div className={data}>
      <Headline title={pageData.headline} />
      <HomeIllustration />
    </div> : <div className={desktopPage}>
      <div className={data}>
        <Headline title={pageData.headline} />
      </div>
      <HomeIllustration />
    </div>}
  </div>
}

export default HomeBanner;
