import Meta from "@layout/Meta";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

const Startup = () => {
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].startup;

  return <Meta title={pageData.title}>
    Startup
  </Meta>
}

export default Startup;
