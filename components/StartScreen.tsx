import React from 'react';
import { Button } from './Button';
import { Citrus, BookOpen } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-8 max-w-lg mx-auto p-6">
      <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
        <Citrus className="w-12 h-12 text-orange-500" />
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Do You Know Vitamin C?
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Test your understanding of Ascorbic Acid, Scurvy, and why your body needs this vital nutrient. Based on Remedy Nutrition's health insights.
        </p>
      </div>

      <div className="w-full space-y-3 pt-4">
        <Button onClick={onStart} fullWidth className="text-lg">
          Start Quiz
        </Button>
        <a 
          href="https://remedysnutrition.com/blogs/vitamins/understanding-vitamin-c-deficiency" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-orange-600 font-medium hover:underline mt-4"
        >
          <BookOpen size={16} />
          Read the Article First
        </a>
      </div>
    </div>
  );
};