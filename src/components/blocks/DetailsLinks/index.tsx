import { useNavigate } from "@hooks/useNavigate";

import { page } from "@shared/pages/details";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui/Button";

import styles from "./DetailsLinks.module.scss";

const DetailsLinks = () => {
  const { root } = styles;
  const { navigate } =useNavigate();
  const toolkit = useToolKit();

  // TODO: useLanguage();
  const pageData = page[toolkit.settings.language];

  return <div className={root}>
    {pageData.links.map((item, index) => <div 
      key={index}>
      <Button title={item.title} theme="invert" onClick={() => navigate(item.path)} />
    </div>)}
  </div>
}

export default DetailsLinks;
