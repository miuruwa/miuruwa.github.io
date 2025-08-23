import HomeBanner from "@blocks/HomeBanner";
import { page } from "@shared/pages/home";
import { useToolKit } from "@shared/toolkit";
import Meta from "@layout/Meta";

const Home = () => {
  const toolkit = useToolKit();

  // TODO: useLanguage()
  // @ts-ignore
  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    <HomeBanner />
  </Meta>
};

export default Home;