import TOSDocument from "@blocks/TOSDocument";
import Meta from "@layout/Meta";
import { page } from "@shared/termsOfService";
import { useToolKit } from "@shared/toolkit";

const TermsOfService = () => {
  const toolkit = useToolKit();

  const pageData = page[toolkit.settings.language];

  return <Meta title={pageData.title}>
    <TOSDocument />
  </Meta>
};

export default TermsOfService;