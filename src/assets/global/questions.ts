export type answerAndQuestions = {
  question: string;
  options: string[];
  answer: number;
};

export const quizData: answerAndQuestions[] = [
  {
    question:
      "What is the main source of greenhouse gas emissions related to the food industry?",
    options: [
      "Transportation of food products",
      "Beef production",
      "Use of chemical fertilizers",
      "Food processing",
    ],
    answer: 1,
  },
  {
    question:
      "Which food requires the greatest amount of water for its production?",
    options: ["Rice", "Tomatoes", "Chicken", "Chocolate"],
    answer: 0,
  },
  {
    question:
      "Which of the following options has the least environmental impact?",
    options: [
      "Vegetarian diet",
      "Meat-based diet",
      "Vegan diet",
      "Pescetarian diet",
    ],
    answer: 2,
  },
  {
    question:
      "What is the primary cause of soil erosion in agricultural areas?",
    options: ["Intense rainfall", "Pesticides", "Overgrazing", "Deforestation"],
    answer: 3,
  },
  {
    question: "Which type of fishing is considered more sustainable?",
    options: [
      "Trawl fishing",
      "Line fishing",
      "Live bait fishing",
      "Net fishing",
    ],
    answer: 2,
  },
  {
    question:
      "What is the impact of intensive livestock farming on biodiversity?",
    options: [
      "Increase in biodiversity",
      "No impact on biodiversity",
      "Reduction in biodiversity",
      "Absence of impact on biodiversity",
    ],
    answer: 3,
  },
  {
    question: "What is the most resource-efficient food option?",
    options: [
      "Processed foods",
      "Local and seasonal foods",
      "Packaged foods",
      "Exotic foods",
    ],
    answer: 2,
  },
  {
    question: "Which agricultural practice promotes soil conservation?",
    options: [
      "Monoculture",
      "Crop rotation",
      "Excessive irrigation",
      "Use of chemical pesticides",
    ],
    answer: 2,
  },
  {
    question:
      "Which food group is responsible for the majority of global deforestation?",
    options: ["Fruits", "Vegetables", "Red meat", "Seafood"],
    answer: 3,
  },
  {
    question:
      "What is the sustainable alternative to plastic for food packaging?",
    options: ["Glass", "Aluminum", "Paper", "Bioplastic"],
    answer: 3,
  },
];
