import { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What is the medical term for severe Vitamin C deficiency?",
    options: [
      "Rickets",
      "Scurvy",
      "Beriberi",
      "Anemia"
    ],
    correctAnswerIndex: 1,
    explanation: "Scurvy is the clinical condition resulting from a lack of vitamin C (ascorbic acid) in the diet."
  },
  {
    id: 2,
    text: "Vitamin C is crucial for the synthesis of which structural protein?",
    options: [
      "Keratin",
      "Insulin",
      "Collagen",
      "Hemoglobin"
    ],
    correctAnswerIndex: 2,
    explanation: "Vitamin C helps produce collagen, a protein essential for healthy skin, cartilage, tendons, ligaments, and blood vessels."
  },
  {
    id: 3,
    text: "Which of the following is an early symptom of Vitamin C deficiency?",
    options: [
      "Rapid weight gain",
      "Extreme thirst",
      "Bleeding gums and fatigue",
      "Blurred vision"
    ],
    correctAnswerIndex: 2,
    explanation: "Early signs often include fatigue, weakness, and inflamed or bleeding gums due to weakened connective tissue."
  },
  {
    id: 4,
    text: "Which group involves lifestyle factors that increase the risk of Vitamin C deficiency?",
    options: [
      "Athletes",
      "Smokers",
      "Vegetarians",
      "Office workers"
    ],
    correctAnswerIndex: 1,
    explanation: "Smoking increases oxidative stress, causing the body to deplete Vitamin C faster than non-smokers."
  },
  {
    id: 5,
    text: "Since the human body cannot synthesize Vitamin C, how must it be obtained?",
    options: [
      "Through sunlight exposure",
      "Through diet or supplementation",
      "By sleeping more",
      "It is stored in the liver for years"
    ],
    correctAnswerIndex: 1,
    explanation: "Humans are one of the few mammals that cannot make their own Vitamin C, so it must be consumed via food or supplements."
  }
];