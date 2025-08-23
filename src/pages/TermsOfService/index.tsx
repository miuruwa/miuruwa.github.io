import TOSDocument from "@blocks/TOSDocument";
import Meta from "@layout/Meta";
import { useTranslation } from "@hooks/useTranslation";
import { termsOfService } from "@shared/pages/termsOfService";

const TermsOfService = () => {
  const { headline } = useTranslation<Pages.TOS>(termsOfService.translations);

  return <Meta title={headline}>
    <TOSDocument />
  </Meta>
};

export default TermsOfService;