import HomeBanner from "@blocks/HomeBanner";
import languagesData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import Meta from "@layout/Meta";

const Home = () => {
  const toolkit = useToolKit();

  const pageData = languagesData[toolkit.settings.language].homepage;

  return <Meta title={pageData.title}>
    <HomeBanner />
  </Meta>
};

export default Home;