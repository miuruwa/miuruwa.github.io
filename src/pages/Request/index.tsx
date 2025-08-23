import RequestConfig from "@blocks/RequestConfig";
import Meta from "@layout/Meta";
import { useTranslation } from "@hooks/useTranslation";
import { request } from "@shared/pages/request";
import { useIsMobile } from "@hooks/useIsMobile";
import { classNames } from "@utils/classNames";

import styles from "./Request.module.scss";


const Request = () => {
  const { root, mobileTemplate, desktopTemplate } = styles;
  const { headline } = useTranslation<Pages.Request>(request.translations);
  const isMobile = useIsMobile(768);

  const containerClasses = classNames(
    root, {
      [mobileTemplate]: isMobile,
      [desktopTemplate]: !isMobile,
    }
  )

  return <Meta title={headline}>
    <div className={containerClasses}>
      <RequestConfig />
    </div>
  </Meta>
};

export default Request;