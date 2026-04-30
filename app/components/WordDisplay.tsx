import React from "react";

type WordDisplayProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function WordDisplay({ 
  guessedLetters, 
  wordToGuess, 
  reveal = false 
}: WordDisplayProps) {
  return (
    <div className="flex gap-3 sm:gap-6 justify-center flex-wrap mt-10">
      {wordToGuess.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);
        const isRevealed = reveal && !isGuessed;

        return (
          <div key={index} className="flex flex-col items-center w-10 sm:w-16">
            <span
              className={`
                text-4xl sm:text-6xl font-black uppercase select-none transition-all duration-300 ease-out transform
                ${(isGuessed || isRevealed) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                ${isGuessed ? 'text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]' : ''}
                ${isRevealed ? 'text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]' : ''}
              `}
            >
              {letter}
            </span>
            {/* Línea base para la letra */}
            <div 
              className={`w-full h-1 sm:h-1.5 rounded-full mt-2 transition-all duration-500 ${
                isGuessed ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-105' :
                isRevealed ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 
                'bg-zinc-700'
              }`} 
            />
          </div>
        );
      })}
    </div>
  );
}
