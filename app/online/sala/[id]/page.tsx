"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import HangmanDrawing from "../../../components/HangmanDrawing";
import WordDisplay from "../../../components/WordDisplay";
import Keyboard from "../../../components/Keyboard";
import GameStatus from "../../../components/GameStatus";

export default function SalaOnline() {
  const params = useParams();
  const router = useRouter();
  const roomId = params.id as string;

  const [gameState, setGameState] = useState<any>(null);
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Sincronización en tiempo real (Polling)
  useEffect(() => {
    const fetchState = async () => {
      try {
        const res = await fetch(`/api/game/${roomId}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const data = await res.json();
        setGameState(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchState();
    const interval = setInterval(fetchState, 1500); // Actualiza cada 1.5s
    return () => clearInterval(interval);
  }, [roomId]);

  const addGuessedLetter = useCallback(
    async (letter: string) => {
      if (!gameState) return;
      if (gameState.status !== "playing") return;
      
      // Actualización optimista local
      setGameState((prev: any) => ({
        ...prev,
        guessedLetters: [...prev.guessedLetters, letter]
      }));

      // Avisar al servidor
      await fetch(`/api/game/${roomId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "guess", letter }),
      });
    },
    [gameState, roomId]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-zñ]$/i)) return;
      e.preventDefault();
      addGuessedLetter(key.toUpperCase());
    };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [addGuessedLetter]);

  if (error) {
    return (
      <div className="flex flex-col min-h-screen items-center bg-[#0d0221] justify-center text-pink-500 font-mono gap-6">
        <h1 className="text-4xl font-bold tracking-[0.2em] animate-pulse">SALA NO ENCONTRADA</h1>
        <button 
          onClick={() => router.push("/")} 
          className="border-2 border-cyan-500 text-cyan-400 px-6 py-3 hover:bg-cyan-900/50"
        >
          [ VOLVER AL SISTEMA ]
        </button>
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="flex flex-col min-h-screen items-center bg-[#0d0221] justify-center text-cyan-400 font-mono">
        <h1 className="text-2xl animate-pulse tracking-[0.3em]">SINCRONIZANDO...</h1>
      </div>
    );
  }

  const { wordToGuess, hint, guessedLetters } = gameState;

  const incorrectLetters = guessedLetters.filter(
    (letter: string) => !wordToGuess.includes(letter)
  );

  const correctLetters = guessedLetters.filter(
    (letter: string) => wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.length > 0 && wordToGuess.split("").every((l: string) => guessedLetters.includes(l));

  // Actualizar estado a finalizado si alguien gana o pierde
  if ((isWinner || isLoser) && gameState.status === 'playing') {
     fetch(`/api/game/${roomId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "updateStatus", status: "finished" }),
      });
  }

  return (
    <div className="flex flex-col min-h-screen items-center bg-[#0d0221] font-mono relative overflow-hidden text-cyan-50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center flex-1">
        <Header />

        {/* Banner de Sala */}
        <div className="w-full bg-[#0a001a]/80 py-3 border-t-2 border-b-2 border-pink-500/50 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
           <span className="text-cyan-200 tracking-[0.2em] text-xs sm:text-sm">CÓDIGO DE SALA ONLINE:</span>
           <span className="text-3xl font-black text-pink-400 tracking-[0.3em] drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">{roomId}</span>
        </div>

        <main className="flex flex-1 w-full max-w-6xl flex-col items-center py-6 px-6">
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          
          <GameStatus isWinner={isWinner} isLoser={isLoser} onRestart={() => router.push("/")} />
          
          <WordDisplay 
            wordToGuess={wordToGuess} 
            guessedLetters={guessedLetters} 
            reveal={isLoser}
          />

          <div className="mt-8 flex flex-col items-center min-h-[4rem] w-full max-w-md">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                disabled={isWinner || isLoser || !hint || hint === 'Sin pistas disponibles.'}
                className={`text-cyan-400 border-2 border-cyan-500/50 px-6 py-2 bg-[#0d0221]/80 hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all uppercase tracking-widest text-sm font-bold flex items-center gap-3 ${
                  (isWinner || isLoser || !hint || hint === 'Sin pistas disponibles.') ? "opacity-0 pointer-events-none" : "animate-in fade-in duration-500"
                }`}
              >
                <span className="text-pink-500">⚡</span> REVELAR PISTA
              </button>
            ) : (
              <div className="bg-[#12042b]/90 border-t-2 border-b-2 border-pink-500 text-cyan-200 px-6 py-3 w-full text-center shadow-[0_0_20px_rgba(236,72,153,0.4)] animate-in fade-in slide-in-from-bottom-2 duration-300">
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
