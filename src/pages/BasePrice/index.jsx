import BasePriceIllustration from "@blocks/BasePriceIllustration";
import BasePriceConfig from "@blocks/BasePriceConfig";
import Meta from "@layout/Meta";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import { useIsMobile } from "@hooks/useIsMobile";
import { classNames } from "@utils/classNames";

import styles from "./BasePrice.module.scss";


const BasePrice = () => {
  const { root, mobileTemplate, desktopTemplate } = styles;
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].basePrice;
  const isMobile = useIsMobile(768);

  const containerClasses = classNames(
    root, {
      [mobileTemplate]: isMobile,
      [desktopTemplate]: !isMobile,
    }
  )

  return <Meta title={pageData.title}>
    <div className={containerClasses}>
      <BasePriceConfig />
      <BasePriceIllustration />
    </div>
  </Meta>
};

export default BasePrice;