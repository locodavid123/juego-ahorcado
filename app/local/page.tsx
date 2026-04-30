"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HangmanDrawing from "../components/HangmanDrawing";
import WordDisplay from "../components/WordDisplay";
import Keyboard from "../components/Keyboard";
import GameStatus from "../components/GameStatus";
import { useHangman } from "../hooks/useHangman";

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
    <div className="flex flex-col min-h-screen items-center bg-[#0d0221] font-mono relative overflow-hidden text-cyan-50">
      {/* 80s Synthwave Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-[linear-gradient(rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom pointer-events-none opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 bottom-[50vh] bg-gradient-to-b from-[#0d0221] via-[#1a0b2e] to-[#2d0a42] pointer-events-none -z-10"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center flex-1">
        <Header />

        <main className="flex flex-1 w-full max-w-6xl flex-col items-center py-4 px-6">
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          
          <GameStatus isWinner={isWinner} isLoser={isLoser} onRestart={restart} />
          
          <WordDisplay 
            wordToGuess={wordToGuess} 
            guessedLetters={guessedLetters} 
            reveal={isLoser}
          />

          <div className="mt-8 flex flex-col items-center min-h-[4rem] w-full max-w-md">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                disabled={isWinner || isLoser || !hint}
                className={`text-cyan-400 border-2 border-cyan-500/50 px-6 py-2 bg-[#0d0221]/80 hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all uppercase tracking-widest text-sm font-bold flex items-center gap-3 rounded-none ${
                  (isWinner || isLoser || !hint) ? "opacity-0 pointer-events-none" : "animate-in fade-in duration-500"
                }`}
              >
                <span className="text-pink-500">⚡</span> REVELAR PISTA
              </button>
            ) : (
              <div className="bg-[#12042b]/90 border-t-2 border-b-2 border-pink-500 text-cyan-200 px-6 py-3 w-full text-center shadow-[0_0_20px_rgba(236,72,153,0.4)] animate-in fade-in slide-in-from-bottom-2 duration-300 backdrop-blur-md uppercase tracking-wider">
                <span className="font-bold text-pink-500 block mb-1 text-xs tracking-[0.3em]">/// DATOS DESENCRIPTADOS</span>
                <span className="text-sm sm:text-base font-medium">{hint}</span>
              </div>
            )}
          </div>
          
          <div className="w-full max-w-3xl mt-6 pb-12">
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
    </div>
  );
}
