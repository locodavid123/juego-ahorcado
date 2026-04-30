"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HangmanDrawing from "./components/HangmanDrawing";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-black font-sans">
      <Header />

      <main className="flex flex-1 w-full max-w-6xl flex-col items-center py-12 px-6">
        <HangmanDrawing numberOfGuesses={2} />
        
        <WordDisplay 
          wordToGuess="DESARROLLO" 
          guessedLetters={['D', 'E', 'O']} 
        />
        
        <Keyboard 
          activeLetters={['D', 'E', 'O']}
          inactiveLetters={['Z', 'X', 'M']}
          addGuessedLetter={() => {}}
        />
      </main>

      <Footer />
    </div>
  );
}
