import Headline from "@ui/Headline";
import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/pages/home";

import styles from "./HomeMessage.module.scss";

const HomeMessage = () => {
  const { root } = styles;
  
  const toolkit = useToolKit();

  // TODO: useLanguage();
  const pageData = page[toolkit.settings.language];

  return <div className={root}>
    <Headline title={pageData.headline} type="big" />
    <Headline title={pageData.subline} type="small" textCase="lower"/>
  </div>
}

export default HomeMessage;
