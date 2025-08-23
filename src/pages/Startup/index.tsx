import Meta from "@layout/Meta";
import { page } from "@shared/pages/startUp";
import { useToolKit } from "@shared/toolkit";

const Startup = () => {
  const toolkit = useToolKit();

  // @ts-expect-error // TODO: useLanguage()
  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    Startup
  </Meta>
}

export default Startup;
