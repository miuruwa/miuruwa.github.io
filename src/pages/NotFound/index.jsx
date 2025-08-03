import NotFoundBanner from "@blocks/NotFoundBanner";
import Meta from "@layout/Meta";
import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/notFound";

const NotFound = () => {
  const toolkit = useToolKit()

  const pageData = page[toolkit.settings.language]

  return <Meta title={pageData.title}>
    <NotFoundBanner />
  </Meta>
}

export default NotFound;
