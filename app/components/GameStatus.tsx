import React from 'react';

type GameStatusProps = {
  isWinner: boolean;
  isLoser: boolean;
  onRestart?: () => void;
};

export default function GameStatus({ isWinner, isLoser, onRestart }: GameStatusProps) {
  if (!isWinner && !isLoser) return null;

  return (
    <div className="flex flex-col items-center my-6 p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] animate-in fade-in zoom-in duration-500 ease-out">
      {isWinner && (
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 mb-3 drop-shadow-sm">
          ¡Felicidades!
        </h2>
      )}
      {isLoser && (
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 mb-3 drop-shadow-sm">
          Fin del Juego
        </h2>
      )}
      <p className="text-gray-300 mb-8 text-center text-lg md:text-xl font-medium">
        {isWinner 
          ? "¡Has adivinado la palabra correctamente! Eres un genio." 
          : "Te has quedado sin intentos. ¡Mejor suerte la próxima vez!"}
      </p>
      <button
        onClick={onRestart}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:scale-95 active:translate-y-0"
      >
        Jugar de nuevo
      </button>
    </div>
  );
}
