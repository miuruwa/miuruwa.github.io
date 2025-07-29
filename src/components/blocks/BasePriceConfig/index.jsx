import { Provider } from 'react-redux';

import BasePriceConfigPoint from "@blocks/BasePriceConfigPoint";
import BasePriceLinks from "@blocks/BasePriceLinks";
import BasePriceConfigTotal from '@blocks/BasePriceConfigTotal';
import Headline from "@blocks/Headline";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import BasePrice from '@stores/BasePrice';

import styles from "./BasePriceConfig.module.scss";

const BasePriceConfig = () => {
  const { root, configList } = styles;

	const toolkit = useToolKit()

  const pageData = languageData[toolkit.settings.language].basePrice;

	return <Provider store={BasePrice}>
    <div className={root}>
      <Headline title={pageData.title} />
      <div className={configList}>
        {Object.entries(pageData.config).map((data, index) => <BasePriceConfigPoint key={index} item={data[1]} action={data[0]} delay={(index+1) / 2} />)}
        
      </div>
      <BasePriceConfigTotal />
      <BasePriceLinks delay={(pageData.config.length + 1) / 2} />
    </div>
  </Provider>
}

export default BasePriceConfig;
