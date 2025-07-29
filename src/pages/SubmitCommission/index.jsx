import Meta from "@layout/Meta";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

const SubmitCommission = () => {
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].submit;

  return <Meta title={pageData.title}>
    Submit Commission
  </Meta>
}

export default SubmitCommission;
