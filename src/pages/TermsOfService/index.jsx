import TOSDocument from "@blocks/TOSDocument";
import Meta from "@layout/Meta";
import languagesData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

const Home = () => {
  const toolkit = useToolKit();

  const pageData = languagesData[toolkit.settings.language].tos;

  return <Meta title={pageData.title}>
    <TOSDocument />
  </Meta>
};

export default Home;