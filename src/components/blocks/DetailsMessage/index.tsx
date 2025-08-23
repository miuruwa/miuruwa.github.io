import DetailsPreferences from "@blocks/DetailsPreferences";
import DetailsAddons from "@blocks/DetailsAddons";
import DetailsTurnarounds from "@blocks/DetailsTurnarounds";
import DetailsLinks from "@blocks/DetailsLinks";
import Headline from "@ui/Headline";
import { details } from "@shared/pages/details";
import { useTranslation } from "@hooks/useTranslation";

import styles from "./DetailsMessage.module.scss";

const DetailsMessage = () => {
  const { root } = styles;

  const { headline } = useTranslation<Pages.Details>(details.translations);

  return <div className={root}>
      <Headline title={headline} />
      <DetailsPreferences />
      <DetailsAddons />
      <DetailsTurnarounds />
      <DetailsLinks />
  </div>
}

export default DetailsMessage;