"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HangmanDrawing from "./components/HangmanDrawing";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import { useHangman } from "./hooks/useHangman";

export default function Home() {
  const {
    wordToGuess,
    hint,
    guessedLetters,
    incorrectLetters,
    correctLetters,
    isLoser,
    isWinner,
    addGuessedLetter,
    restart: originalRestart,
  } = useHangman();

  const [showHint, setShowHint] = useState(false);

  const restart = () => {
    setShowHint(false);
    originalRestart();
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-black font-sans">
      <Header />

      <main className="flex flex-1 w-full max-w-6xl flex-col items-center py-12 px-6">
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        
        <GameStatus isWinner={isWinner} isLoser={isLoser} onRestart={restart} />
        
        <WordDisplay 
          wordToGuess={wordToGuess} 
          guessedLetters={guessedLetters} 
        />

        <div className="mt-8 flex flex-col items-center min-h-[4rem] w-full max-w-md">
          {!showHint ? (
            <button
              onClick={() => setShowHint(true)}
              disabled={isWinner || isLoser || !hint}
              className={`text-indigo-400 border border-indigo-500/50 px-5 py-2 rounded-full hover:bg-indigo-500/20 transition-all text-sm font-semibold tracking-wider flex items-center gap-2 ${
                (isWinner || isLoser || !hint) ? "opacity-0 pointer-events-none" : "animate-in fade-in duration-500"
              }`}
            >
              <span>💡</span> Mostrar Pista
            </button>
          ) : (
            <div className="bg-indigo-950/50 border border-indigo-500/30 text-indigo-200 px-6 py-3 rounded-2xl w-full text-center shadow-[0_0_20px_rgba(99,102,241,0.15)] animate-in fade-in slide-in-from-bottom-2 duration-300 backdrop-blur-sm">
              <span className="font-bold text-indigo-300 block mb-1 text-sm uppercase tracking-widest">Pista</span>
              <span className="text-base sm:text-lg">{hint}</span>
            </div>
          )}
        </div>
        
        <div className="w-full max-w-3xl mt-4">
          <Keyboard 
            activeLetters={correctLetters}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
            disabled={isWinner || isLoser}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
