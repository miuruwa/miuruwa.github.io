import HomeBanner from "@blocks/HomeBanner";
import { page } from "@shared/home";
import { useToolKit } from "@shared/toolkit";
import Meta from "@layout/Meta";

const Home = () => {
  const toolkit = useToolKit();

  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    <HomeBanner />
  </Meta>
};

export default Home;