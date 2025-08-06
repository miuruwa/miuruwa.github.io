import DetailsMessage from "@blocks/DetailsMessage";
import Meta from "@layout/Meta";
import { page } from "@shared/details";
import { useToolKit } from "@shared/toolkit";
import { useIsMobile } from "@hooks/useIsMobile";
import { classNames } from "@utils/classNames";

import styles from "./Details.module.scss";


const Details = () => {
  const { root, mobileTemplate, desktopTemplate } = styles;
  const toolkit = useToolKit();
  const pageData = page[toolkit.settings.language];
  const isMobile = useIsMobile(768);

  const containerClasses = classNames(
    root, {
      [mobileTemplate]: isMobile,
      [desktopTemplate]: !isMobile,
    }
  )

  return <Meta title={pageData.title}>
    <div className={containerClasses}>
      <DetailsMessage />
    </div>
  </Meta>
};

export default Details;