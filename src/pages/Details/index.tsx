import DetailsMessage from "@blocks/DetailsMessage";
import Meta from "@layout/Meta";
import { details } from "@shared/pages/details";
import { useIsMobile } from "@hooks/useIsMobile";
import { useTranslation } from "@hooks/useTranslation";
import { classNames } from "@utils/classNames";

import styles from "./Details.module.scss";


const Details = () => {
  const { root, mobileTemplate, desktopTemplate } = styles;

  const { headline } = useTranslation<Pages.Details>(details.translations);
  const isMobile = useIsMobile(768);

  const containerClasses = classNames(
    root, {
      [mobileTemplate]: isMobile,
      [desktopTemplate]: !isMobile,
    }
  )

  return <Meta title={headline}>
    <div className={containerClasses}>
      <DetailsMessage />
    </div>
  </Meta>
};

export default Details;