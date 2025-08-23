import Headline from "@ui/Headline";
import { useTranslation } from "@hooks/useTranslation";
import { home } from "@shared/pages/home";

import styles from "./HomeMessage.module.scss";

const HomeMessage = () => {
  const { root } = styles;

  const { headline, description } = useTranslation<Pages.Home>(home.translations);

  return <div className={root}>
    <Headline title={headline} type="big" />
    <Headline title={description} type="small" textCase="lower"/>
  </div>
}

export default HomeMessage;
