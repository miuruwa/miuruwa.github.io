import { useNavigate } from "@hooks/useNavigate";

import { details } from "@shared/pages/details";
import { useTranslation } from "@hooks/useTranslation";
import { Button } from "@ui/Button";

import styles from "./DetailsLinks.module.scss";

const DetailsLinks = () => {
  const { root } = styles;
  const { navigate } =useNavigate();

  const { links } = useTranslation<Pages.Details>(details.translations);

  return <div className={root}>
    {links.map((item, index) => <div
      key={index}>
      <Button title={item.title} theme="invert" onClick={() => navigate(item.path ?? "")} />
    </div>)}
  </div>
}

export default DetailsLinks;
