import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "@/locals/en/translate.json";
import uz from "@/locals/uz/translate.json";
i18next.use(LanguageDetector).init({
  resources: {
    en: {
      translation: en,
    },
    uz: {
      translation: uz,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
