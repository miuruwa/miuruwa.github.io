import DetailsPreferences from "@blocks/DetailsPreferences";
import DetailsAddons from "@blocks/DetailsAddons";
import DetailsTurnarounds from "@blocks/DetailsTurnarounds";
import DetailsLinks from "@blocks/DetailsLinks";
import Headline from "@blocks/Headline";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

import styles from "./DetailsMessage.module.scss";

const DetailsMessage = () => {
  const { root } = styles;
  const toolkit = useToolKit();

  const pageData = languageData[toolkit.settings.language].details;

  return <div className={root}>
      <Headline title={pageData.title} />
      <DetailsPreferences />
      <DetailsAddons />
      <DetailsTurnarounds />
      <DetailsLinks />
  </div>
}

export default DetailsMessage;