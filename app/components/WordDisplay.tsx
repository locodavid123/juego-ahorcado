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
    <div className="flex gap-2 sm:gap-4 justify-center flex-wrap mt-10">
      {wordToGuess.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);
        const isRevealed = reveal && !isGuessed;

        return (
          <div key={index} className="flex flex-col items-center w-8 sm:w-14">
            <span
              className={`
                text-3xl sm:text-5xl font-black uppercase select-none transition-all duration-300 ease-out transform
                ${(isGuessed || isRevealed) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                ${isGuessed ? 'text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,1)]' : ''}
                ${isRevealed ? 'text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]' : ''}
              `}
            >
              {letter}
            </span>
            {/* Línea base para la letra estilo neon */}
            <div 
              className={`w-full h-1.5 sm:h-2 mt-2 transition-all duration-500 rounded-sm
                ${isGuessed ? 'bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.9)] scale-105' :
                  isRevealed ? 'bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]' : 
                  'bg-cyan-900/50 border-b border-cyan-500/50 shadow-[0_2px_10px_rgba(34,211,238,0.2)]'
                }`} 
            />
          </div>
        );
      })}
    </div>
  );
}
