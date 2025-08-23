import { useLanguage } from "./useLanguage";


export const useTranslation = <Page, >(pages: Translations.Translate<Page>): Page => {
  const language = useLanguage();

  return pages[language];
}