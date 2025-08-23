import RequestConfig from "@blocks/RequestConfig";
import Meta from "@layout/Meta";
import { page } from "@shared/pages/request";
import { useToolKit } from "@shared/toolkit";
import { useIsMobile } from "@hooks/useIsMobile";
import { classNames } from "@utils/classNames";

import styles from "./Request.module.scss";


const Request = () => {
  const { root, mobileTemplate, desktopTemplate } = styles;
  const toolkit = useToolKit();

  // @ts-expect-error // TODO: useLanguage()
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
      <RequestConfig />
    </div>
  </Meta>
};

export default Request;