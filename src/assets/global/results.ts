import SeedInitiator from "../img/seed_initiator.png";
import FruitsStarter from "../img/fruits_starter.png";
import TreeAware from "../img/tree_aware.png";
import VegetablesExpert from "../img/vegetables_expert.png";
import EarthMaster from "../img/earth_master.png";

type resultsSentencesType = {
  [key: string]: {
    sentence: string;
    description: string;
    image: string;
  };
};

export const resultsSentences: resultsSentencesType = {
  initiator: {
    sentence: "Initiator",
    description:
      "Every journey begins with a step. Your curiosity about the impact of food on the environment is a great starting point. Keep exploring and learning!",
    image: SeedInitiator,
  },
  starter: {
    sentence: "Starter",
    description:
      "You're just getting started on your journey to understanding the impact of food on the environment. Keep learning and exploring!",
    image: FruitsStarter,
  },
  aware: {
    sentence: "Aware",
    description:
      "Great job! You've shown good knowledge. Keep exploring the link between food and the environment to further improve.",
    image: TreeAware,
  },
  expert: {
    sentence: "Expert",
    description:
      "Well done! You've demonstrated in-depth knowledge on the topic. Keep it up, and you'll become a true master of sustainable food!",
    image: VegetablesExpert,
  },
  master: {
    sentence: "Master",
    description:
      "Extraordinary! You've achieved the highest score and proven yourself a true master of food and the environment. Continue spreading awareness and commitment for a more sustainable future.",
    image: EarthMaster,
  },
};
