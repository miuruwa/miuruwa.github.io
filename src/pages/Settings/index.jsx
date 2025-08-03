import Meta from "@layout/Meta";
import { page } from "@shared/settings";
import { useToolKit } from "@shared/toolkit";

const Settings = () => {
  const toolkit = useToolKit();
  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    Settings
  </Meta>
}

export default Settings;
