import { useNavigate } from "react-router-dom";

import BannerBackground from "@blocks/BannerBackground";
import Headline from "@blocks/Headline";
import HomeIllustration from "@blocks/HomeIllustration";
import { useIsMobile } from "@hooks/useIsMobile";
import { useToolKit } from "@shared/toolkit";
import languageData from "@shared/languages";
import { Button } from "@ui";

import styles from "./HomeBanner.module.scss";

const HomeBanner = () => {
  const { root, data, desktopPage } = styles;
  const isMobile = useIsMobile(768);
  const toolkit = useToolKit()
  const navigate = useNavigate();
  const pageData = languageData[toolkit.settings.language].homepage
  return <div className={root}>
    <BannerBackground />
    {isMobile ? <div className={data}>
      <Headline title={pageData.headline} />
      <HomeIllustration />
      <Button
        title="about"
        theme="transparent"
        onClick={() => navigate("/about")}
      />
    </div> : <div className={desktopPage}>
      <div className={data}>
        <Headline title={pageData.headline} />
        <Button
          title="about"
          theme="transparent"
          onClick={() => navigate("/about")}
        />
      </div>
      <HomeIllustration />
    </div>}
  </div>
}

export default HomeBanner;
