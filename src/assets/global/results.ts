// import SeedInitiator from "../img/seed_initiator.png";
// import FruitsStarter from "../img/fruits_starter.png";
// import TreeAware from "../img/tree_aware.png";
// import VegetablesExpert from "../img/vegetables_expert.png";
// import EarthMaster from "../img/earth_master.png";

import enResultsInfo from "../translations/result_en.json";
import itResultsInfo from "../translations/result_it.json";

export type resultsSentencesType = {
  [key: string]: {
    sentence: string;
    description: string;
    image: string;
  };
};

export function getResultsData(language: string) {
  switch (language) {
    case "en":
      return enResultsInfo;
    case "it":
      return itResultsInfo;
    default:
      return enResultsInfo;
  }
}
