import React from 'react';
import { Button } from './Button';
import { Trophy, RotateCcw, ExternalLink } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  total: number;
  onRetry: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRetry }) => {
  const percentage = Math.round((score / total) * 100);
  
  let message = "";
  let subMessage = "";

  if (percentage === 100) {
    message = "Vitamin C Expert!";
    subMessage = "You have a perfect understanding of deficiency symptoms and prevention.";
  } else if (percentage >= 80) {
    message = "Great Job!";
    subMessage = "You know your nutrition well. Just a few details to brush up on.";
  } else if (percentage >= 50) {
    message = "Good Effort";
    subMessage = "You have the basics down, but there's more to learn about Scurvy.";
  } else {
    message = "Time to Study";
    subMessage = "It looks like you might be at risk of a knowledge deficiency!";
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
      <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Trophy className="w-10 h-10 text-yellow-600" />
      </div>

      <h2 className="text-3xl font-bold text-slate-900 mb-2">{message}</h2>
      <p className="text-slate-500 mb-8">{subMessage}</p>

      <div className="bg-slate-50 rounded-2xl p-6 mb-8">
        <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Score</p>
        <div className="text-5xl font-black text-orange-500">
          {percentage}%
        </div>
        <p className="text-slate-400 mt-2">
          {score} out of {total} correct
        </p>
      </div>

      <div className="space-y-3">
        <Button onClick={onRetry} fullWidth variant="primary">
          <span className="flex items-center justify-center gap-2">
            <RotateCcw size={18} /> Try Again
          </span>
        </Button>
        
        <a 
          href="https://remedysnutrition.com/blogs/vitamins/understanding-vitamin-c-deficiency" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button fullWidth variant="outline">
            <span className="flex items-center justify-center gap-2">
              Read Full Article <ExternalLink size={18} />
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
};