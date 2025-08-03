import Meta from "@layout/Meta";
import { page } from "@shared/startUp";
import { useToolKit } from "@shared/toolkit";

const Startup = () => {
  const toolkit = useToolKit();
  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    Startup
  </Meta>
}

export default Startup;
