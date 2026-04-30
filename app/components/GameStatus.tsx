import React from 'react';

type GameStatusProps = {
  isWinner: boolean;
  isLoser: boolean;
  onRestart?: () => void;
};

export default function GameStatus({ isWinner, isLoser, onRestart }: GameStatusProps) {
  if (!isWinner && !isLoser) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className={`
        flex flex-col items-center justify-center p-8 md:p-12 
        bg-[#0d0221]/90 border-4 shadow-[0_0_50px_rgba(0,0,0,0.8)] 
        animate-in zoom-in-95 duration-300
        ${isWinner ? 'border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.4)]' : 'border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.4)]'}
      `}>
        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] mix-blend-overlay"></div>

        <h2 className={`
          text-5xl md:text-7xl font-black uppercase tracking-widest mb-4 
          ${isWinner ? 'text-pink-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]' : 'text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]'}
        `}>
          {isWinner ? "SYSTEM HACKED" : "SYSTEM FAILURE"}
        </h2>
        
        <p className="text-cyan-300 mb-10 text-center text-lg md:text-xl font-mono tracking-widest uppercase bg-black/40 px-6 py-2 border-l-4 border-cyan-500">
          {isWinner 
            ? "> ACCESO DE DATOS CONCEDIDO" 
            : "> DESCONEXIÓN INMINENTE"}
        </p>

        <button
          onClick={onRestart}
          className="
            px-10 py-4 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 
            font-bold text-lg md:text-xl uppercase tracking-[0.2em] 
            hover:bg-cyan-400 hover:text-[#0d0221] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] 
            transition-all duration-200 active:scale-95 active:shadow-none
          "
        >
          [ REINICIAR SISTEMA ]
        </button>
      </div>
    </div>
  );
}
