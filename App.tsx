import React, { useState } from 'react';
import { QuizStatus, QuizState } from './types';
import { QUIZ_QUESTIONS } from './constants';
import { StartScreen } from './components/StartScreen';
import { QuizCard } from './components/QuizCard';
import { ResultScreen } from './components/ResultScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>({
    status: QuizStatus.START,
    currentQuestionIndex: 0,
    score: 0,
    answers: []
  });

  const startQuiz = () => {
    setGameState({
      status: QuizStatus.PLAYING,
      currentQuestionIndex: 0,
      score: 0,
      answers: []
    });
  };

  const handleAnswer = (selectedIndex: number) => {
    const currentQuestion = QUIZ_QUESTIONS[gameState.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;

    setGameState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, selectedIndex]
    }));
  };

  const nextQuestion = () => {
    if (gameState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        status: QuizStatus.FINISHED
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 py-12 px-4 flex items-center justify-center">
      {gameState.status === QuizStatus.START && (
        <StartScreen onStart={startQuiz} />
      )}

      {gameState.status === QuizStatus.PLAYING && (
        <QuizCard
          question={QUIZ_QUESTIONS[gameState.currentQuestionIndex]}
          questionIndex={gameState.currentQuestionIndex}
          totalQuestions={QUIZ_QUESTIONS.length}
          onAnswer={handleAnswer}
          onNext={nextQuestion}
        />
      )}

      {gameState.status === QuizStatus.FINISHED && (
        <ResultScreen
          score={gameState.score}
          total={QUIZ_QUESTIONS.length}
          onRetry={startQuiz}
        />
      )}
    </div>
  );
};

export default App;