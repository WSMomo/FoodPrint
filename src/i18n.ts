import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./assets/translations/en.json";
import itTranslation from "./assets/translations/it.json";
import enQuizTranslations from "./assets/translations/questions_en.json";
import itQuizTranslations from "./assets/translations/questions_it.json";
import enResultsTranslations from "./assets/translations/result_en.json";
import itResultsTranslations from "./assets/translations/result_it.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      questions: enQuizTranslations,
      results: enResultsTranslations,
    },
    it: {
      translation: itTranslation,
      questions: itQuizTranslations,
      results: itResultsTranslations,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
