import HomeBanner from "@blocks/HomeBanner";
import { useTranslation } from "@hooks/useTranslation";
import { home } from "@shared/pages/home";
import Meta from "@layout/Meta";

const Home = () => {
  const { headline } = useTranslation<Pages.Home>(home.translations);

  return <Meta title={headline}>
    <HomeBanner />
  </Meta>
};

export default Home;