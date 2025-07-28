import { useNavigate } from "react-router-dom";

import BackIcon from "@icons/BackIcon";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const { root } = styles;

  const toolkit = useToolKit();
  const navigate = useNavigate();
  const pageData = languageData[toolkit.settings.language].pageNavigation

  return <div className={root}>
    <Button 
      icon={<BackIcon />}
      title={pageData.home}
      theme="transparent"
      onClick={() => navigate("/home")}
    />
  </div>
}

export default Navigation;