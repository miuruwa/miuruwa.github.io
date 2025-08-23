import BannerBackground from "@blocks/BannerBackground";
import HomeIllustration from "@blocks/HomeIllustration";
import HomeMessage from "@blocks/HomeMessage";
import { useIsMobile } from "@hooks/useIsMobile";

import styles from "./HomeBanner.module.scss";

const HomeBanner = () => {
  const { root, mobilePage, desktopPage } = styles;
  const isMobile = useIsMobile(768);

  return <div className={root}>
    <BannerBackground />
    <div className={isMobile ? mobilePage : desktopPage}>
      <HomeMessage />
      <HomeIllustration />
    </div>
  </div>
}

export default HomeBanner;
