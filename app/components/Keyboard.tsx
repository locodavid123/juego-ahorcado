import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
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
    <div className="flex flex-col gap-2 sm:gap-3 items-center mt-12 w-full max-w-4xl px-2">
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
                  relative px-2 py-4 sm:px-4 sm:py-5 rounded-xl font-bold text-base sm:text-xl transition-all duration-200
                  border backdrop-blur-sm shadow-sm select-none
                  flex-1 max-w-[50px] sm:max-w-[65px] flex items-center justify-center
                  ${
                    isActive
                      ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                      : isInactive
                      ? "bg-zinc-950/80 border-zinc-900 text-zinc-700 opacity-50"
                      : "bg-zinc-800/60 border-zinc-700/80 text-zinc-300 hover:bg-zinc-700 hover:text-white hover:border-zinc-500 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
                  }
                  ${disabled && !isClicked ? "opacity-50 cursor-not-allowed hover:translate-y-0" : ""}
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
