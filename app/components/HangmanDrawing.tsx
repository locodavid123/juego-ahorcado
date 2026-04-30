import React from "react";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const isDead = numberOfGuesses >= 6;
  
  return (
    <div className={`relative flex justify-center items-center p-8 bg-[#0a001a]/80 border-2 shadow-2xl transition-colors duration-500
      ${isDead ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]' : 'border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)]'}
    `}>
      <svg 
        width="240" 
        height="280" 
        viewBox="0 0 240 280" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
      >
        
        {/* === ESTRUCTURA DEL PATÍBULO === */}
        {/* Base */}
        <path d="M 20 270 L 140 270" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_8px_#0ea5e9]" />
        {/* Poste vertical */}
        <path d="M 80 270 L 80 20" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_8px_#0ea5e9]" />
        {/* Poste horizontal */}
        <path d="M 76 20 L 180 20" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_8px_#0ea5e9]" />
        {/* Cuerda (Laser magenta) */}
        <path d="M 180 20 L 180 60" stroke="#ec4899" strokeWidth="4" strokeLinecap="square" className="drop-shadow-[0_0_10px_#ec4899]" />

        {/* === PARTES DEL CUERPO (Aparecen según los errores) === */}
        {/* 1. Cabeza */}
        {numberOfGuesses > 0 && (
          <circle cx="180" cy="80" r="20" stroke="#22d3ee" strokeWidth="6" className="drop-shadow-[0_0_12px_#22d3ee]" />
        )}
        {/* 2. Cuerpo */}
        {numberOfGuesses > 1 && (
          <path d="M 180 100 L 180 170" stroke="#22d3ee" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_12px_#22d3ee]" />
        )}
        {/* 3. Brazo Izquierdo */}
        {numberOfGuesses > 2 && (
          <path d="M 180 120 L 140 150" stroke="#22d3ee" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_12px_#22d3ee]" />
        )}
        {/* 4. Brazo Derecho */}
        {numberOfGuesses > 3 && (
          <path d="M 180 120 L 220 150" stroke="#22d3ee" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_12px_#22d3ee]" />
        )}
        {/* 5. Pierna Izquierda */}
        {numberOfGuesses > 4 && (
          <path d="M 180 170 L 150 220" stroke="#22d3ee" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_12px_#22d3ee]" />
        )}
        {/* 6. Pierna Derecha (Ahorcado completo) */}
        {numberOfGuesses > 5 && (
          <path d="M 180 170 L 210 220" stroke="#22d3ee" strokeWidth="6" strokeLinecap="square" className="drop-shadow-[0_0_12px_#22d3ee]" />
        )}

        {/* Rostro de Derrota (Ojos en X rojos neón) */}
        {numberOfGuesses >= 6 && (
          <>
            <path d="M 172 75 L 178 81 M 178 75 L 172 81" stroke="#ef4444" strokeWidth="3" strokeLinecap="square" className="drop-shadow-[0_0_10px_#ef4444]" />
            <path d="M 182 75 L 188 81 M 188 75 L 182 81" stroke="#ef4444" strokeWidth="3" strokeLinecap="square" className="drop-shadow-[0_0_10px_#ef4444]" />
            <path d="M 175 88 L 185 88" stroke="#ef4444" strokeWidth="3" strokeLinecap="square" className="drop-shadow-[0_0_10px_#ef4444]" />
          </>
        )}
      </svg>
      
      {/* Scanline overlay sobre el dibujo */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] mix-blend-overlay"></div>
    </div>
  );
}
