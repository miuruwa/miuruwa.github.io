import BannerBackground from "@blocks/BannerBackground";
import HomeIllustration from "@blocks/NotFoundIllustration";
import NotFoundMessage from "@blocks/NotFoundMessage";
import { useIsMobile } from "@hooks/useIsMobile";

import styles from "./NotFoundBanner.module.scss";

const NotFoundBanner = () => {
  const { root, mobilePage, desktopPage } = styles;
  const isMobile = useIsMobile(768);

  return <div className={root}>
    <BannerBackground />
    <div className={isMobile ? mobilePage : desktopPage}>
      <NotFoundMessage />
      <HomeIllustration />
    </div>
  </div>
}

export default NotFoundBanner;
