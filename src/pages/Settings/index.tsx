import Meta from "@layout/Meta";
import { useTranslation } from "@hooks/useTranslation";
import { settings } from "@shared/pages/settings";

const Settings = () => {
  const { headline } = useTranslation<Pages.Settings>(settings.translations);

  return <Meta title={headline}>
    {headline}
  </Meta>
}

export default Settings;
