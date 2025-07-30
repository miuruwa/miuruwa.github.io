import RequestIllustration from "@blocks/RequestIllustration";
import RequestConfig from "@blocks/RequestConfig";
import Meta from "@layout/Meta";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import { useIsMobile } from "@hooks/useIsMobile";
import { classNames } from "@utils/classNames";

import styles from "./Request.module.scss";


const Request = () => {
  const { root, mobileTemplate, desktopTemplate } = styles;
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].request;
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
      <RequestIllustration />
    </div>
  </Meta>
};

export default Request;