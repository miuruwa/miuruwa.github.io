import BasePriceConfigPoint from "@blocks/BasePriceConfigPoint";
import BasePriceLinks from "@blocks/BasePriceLinks";
import Headline from "@blocks/Headline";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

import styles from "./BasePriceConfig.module.scss";

const BasePriceConfig = () => {
  const { root, configList } = styles;
	const toolkit = useToolKit()

  const pageData = languageData[toolkit.settings.language].basePrice;

	return <div className={root}>
		<Headline title={pageData.title} />
		<div className={configList}>
			{pageData.config.map((item, index) => <BasePriceConfigPoint key={index} item={item} delay={(index+1) / 2} />)}
		</div>
		<BasePriceLinks delay={(pageData.config.length + 1) / 2} />
	</div>
}

export default BasePriceConfig;
