import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
  ["Z", "X", "C", "V", "B", "N", "M"]
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 items-center mt-6 w-full max-w-4xl px-2">
      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2 sm:gap-3 justify-center w-full">
          {row.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            const isClicked = isActive || isInactive;

            return (
              <button
                key={key}
                onClick={() => addGuessedLetter(key)}
                disabled={isClicked || disabled}
                className={`
                  relative px-1 py-3 sm:px-4 sm:py-5 font-bold text-sm sm:text-xl transition-all duration-200 select-none
                  flex-1 max-w-[40px] sm:max-w-[65px] flex items-center justify-center uppercase
                  border-b-4 active:border-b-0 active:translate-y-1 active:mb-1
                  ${
                    isActive
                      ? "bg-pink-600/20 border-pink-500 border-b-pink-700 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                      : isInactive
                      ? "bg-[#0d0221]/80 border-[#1a0b2e] border-b-[#050010] text-zinc-700 opacity-50"
                      : "bg-cyan-900/30 border-cyan-600 border-b-cyan-800 text-cyan-300 hover:bg-cyan-500/30 hover:text-cyan-100 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                  }
                  ${disabled && !isClicked ? "opacity-30 cursor-not-allowed hover:bg-cyan-900/30 hover:shadow-none hover:text-cyan-300" : ""}
                `}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
