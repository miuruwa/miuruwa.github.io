import NotFoundBanner from "@blocks/NotFoundBanner";
import Meta from "@layout/Meta";
import { useToolKit } from "@shared/toolkit";
import languages from "@shared/languages";

const NotFound = () => {
  const toolkit = useToolKit()

  const pageData = languages[toolkit.settings.language].notFound

  return <Meta title={pageData.title}>
    <NotFoundBanner />
  </Meta>
}

export default NotFound;
