import Meta from "@layout/Meta";
import { useTranslation } from "@hooks/useTranslation";
import { startup } from "@shared/pages/startUp";

const Startup = () => {
  const { headline } = useTranslation<Pages.StartUp>(startup.translations);

  return <Meta title={headline}>
    {headline}
  </Meta>
}

export default Startup;
