import { useNavigate } from "react-router-dom";

import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui";

import styles from "./DetailsLinks.module.scss";

const DetailsLinks = () => {
  const { root } = styles;
  const navigate = useNavigate();
  const toolkit = useToolKit();

  const pageData = languageData[toolkit.settings.language].details;

  return <div className={root}>
    {pageData.links.map((item, index) => <div 
      key={index}>
      <Button title={item.title} theme="invert" onClick={() => navigate(item.path)} />
    </div>)}
  </div>
}

export default DetailsLinks;
