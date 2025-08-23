import TOSDocument from "@blocks/TOSDocument";
import Meta from "@layout/Meta";
import { page } from "@shared/pages/termsOfService";
import { useToolKit } from "@shared/toolkit";

const TermsOfService = () => {
  const toolkit = useToolKit();

  // TODO: useLanguage()
  // @ts-ignore
  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    <TOSDocument />
  </Meta>
};

export default TermsOfService;