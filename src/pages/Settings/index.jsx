import Meta from "@layout/Meta";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

const Settings = () => {
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].settings;

  return <Meta title={pageData.title}>
    Settings
  </Meta>
}

export default Settings;
