export type Language = "en" | "fr"

export type LocalizedText = {
  en: string
  fr: string
}

export function translateText(text: LocalizedText, language: Language) {
  return text[language]
}
