import React, { useState } from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (selectedIndex: number) => void;
  onNext: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onNext
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    onAnswer(selectedOption);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    onNext();
  };

  const isCorrect = selectedOption === question.correctAnswerIndex;

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-100">
        <div 
          className="h-full bg-orange-500 transition-all duration-500 ease-out"
          style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
            Question {questionIndex + 1} / {totalQuestions}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let optionStyles = "border-slate-200 hover:border-orange-300 hover:bg-orange-50";
            let icon = null;

            if (isSubmitted) {
              if (idx === question.correctAnswerIndex) {
                optionStyles = "border-green-500 bg-green-50 text-green-700 font-medium";
                icon = <CheckCircle2 className="text-green-500 w-5 h-5" />;
              } else if (idx === selectedOption) {
                optionStyles = "border-red-500 bg-red-50 text-red-700";
                icon = <XCircle className="text-red-500 w-5 h-5" />;
              } else {
                optionStyles = "opacity-50 border-slate-100";
              }
            } else if (selectedOption === idx) {
              optionStyles = "border-orange-500 bg-orange-50 ring-1 ring-orange-500";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center group ${optionStyles}`}
              >
                <span>{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2">
            <p className="font-semibold text-slate-900 mb-1">
              {isCorrect ? "Correct!" : "Not quite right."}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8">
          {!isSubmitted ? (
            <Button 
              onClick={handleSubmit} 
              fullWidth 
              disabled={selectedOption === null}
              className={selectedOption === null ? "opacity-50 cursor-not-allowed" : ""}
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext} fullWidth className="flex items-center justify-center gap-2">
              Next Question <ArrowRight size={20} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};