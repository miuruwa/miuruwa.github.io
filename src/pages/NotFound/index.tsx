import NotFoundBanner from "@blocks/NotFoundBanner";
import Meta from "@layout/Meta";
import { useTranslation } from "@hooks/useTranslation";
import { notFound } from "@shared/pages/notFound";

const NotFound = () => {
  const { headline } = useTranslation<Pages.NotFound>(notFound.translations);

  return <Meta title={headline}>
    <NotFoundBanner />
  </Meta>
}

export default NotFound;
