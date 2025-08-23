import { useParams } from "react-router-dom";

import { isLanguageValid } from "@utils/isLanguageValid";

export const useLanguage = () => {
  const { language } = useParams();

  const validLanguage: Translations.Languages = language && isLanguageValid(language) ? language : "eng";

  return validLanguage
}