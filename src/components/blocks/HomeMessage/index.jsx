import Headline from "@blocks/Headline";
import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/home";

import styles from "./HomeMessage.module.scss";

const HomeMessage = () => {
  const { root } = styles;
  
  const toolkit = useToolKit();

  const pageData = page[toolkit.settings.language];

  return <div className={root}>
    <Headline title={pageData.headline} type="big" />
    <Headline title={pageData.subline} type="small" textCase="lower"/>
  </div>
}

export default HomeMessage;
