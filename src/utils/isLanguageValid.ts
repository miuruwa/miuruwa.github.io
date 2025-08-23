export const isLanguageValid = (language: string): language is Translations.Languages => {
  return ["eng"].includes(language); // Update with actual Pages.Languages values
}