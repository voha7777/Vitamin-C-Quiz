export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export enum QuizStatus {
  START = 'START',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED'
}

export interface QuizState {
  status: QuizStatus;
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[]; // Stores index of selected answer per question
}