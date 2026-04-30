import React from "react";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  // numberOfGuesses representa la cantidad de errores (0 a 6)
  
  return (
    <div className="relative flex justify-center items-center p-8 bg-zinc-950/40 rounded-3xl border border-white/5 backdrop-blur-md shadow-2xl">
      <svg 
        width="240" 
        height="280" 
        viewBox="0 0 240 280" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
      >
        
        {/* === ESTRUCTURA DEL PATÍBULO === */}
        {/* Base */}
        <path d="M 20 270 L 140 270" stroke="#3f3f46" strokeWidth="8" strokeLinecap="round" />
        {/* Poste vertical */}
        <path d="M 80 270 L 80 20" stroke="#3f3f46" strokeWidth="8" strokeLinecap="round" />
        {/* Poste horizontal */}
        <path d="M 76 20 L 180 20" stroke="#3f3f46" strokeWidth="8" strokeLinecap="round" />
        {/* Cuerda */}
        <path d="M 180 20 L 180 60" stroke="#71717a" strokeWidth="4" strokeLinecap="round" />

        {/* === PARTES DEL CUERPO (Aparecen según los errores) === */}
        {/* 1. Cabeza */}
        {numberOfGuesses > 0 && (
          <circle cx="180" cy="80" r="20" stroke="white" strokeWidth="6" />
        )}
        {/* 2. Cuerpo */}
        {numberOfGuesses > 1 && (
          <path d="M 180 100 L 180 170" stroke="white" strokeWidth="6" strokeLinecap="round" />
        )}
        {/* 3. Brazo Izquierdo */}
        {numberOfGuesses > 2 && (
          <path d="M 180 120 L 140 150" stroke="white" strokeWidth="6" strokeLinecap="round" />
        )}
        {/* 4. Brazo Derecho */}
        {numberOfGuesses > 3 && (
          <path d="M 180 120 L 220 150" stroke="white" strokeWidth="6" strokeLinecap="round" />
        )}
        {/* 5. Pierna Izquierda */}
        {numberOfGuesses > 4 && (
          <path d="M 180 170 L 150 220" stroke="white" strokeWidth="6" strokeLinecap="round" />
        )}
        {/* 6. Pierna Derecha (Ahorcado completo) */}
        {numberOfGuesses > 5 && (
          <path d="M 180 170 L 210 220" stroke="white" strokeWidth="6" strokeLinecap="round" />
        )}

        {/* Rostro de Derrota (Ojos en X) - Sólo aparece cuando se pierde (6 errores) */}
        {numberOfGuesses >= 6 && (
          <>
            <path d="M 172 75 L 178 81 M 178 75 L 172 81" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <path d="M 182 75 L 188 81 M 188 75 L 182 81" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <path d="M 175 88 L 185 88" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}
