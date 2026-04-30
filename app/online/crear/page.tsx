"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CrearSala() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}) // No enviamos datos para que el sistema asigne la palabra y pista
      });
      const data = await res.json();
      if (data.success && data.roomId) {
        router.push(`/online/sala/${data.roomId}`);
      }
    } catch (err) {
      alert("Error al crear la sala.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-[#0d0221] font-mono relative overflow-hidden text-cyan-50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center flex-1">
        <Header />

        <main className="flex flex-1 w-full max-w-lg flex-col items-center justify-center py-12 px-6">
          <form onSubmit={handleSubmit} className="bg-[#0a001a]/90 border-2 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.2)] p-8 md:p-12 w-full flex flex-col gap-8 backdrop-blur-md items-center text-center">
            <h2 className="text-2xl font-black text-pink-400 uppercase tracking-widest border-b-2 border-pink-500/30 pb-4 w-full">
              [ INICIAR SERVIDOR COOPERATIVO ]
            </h2>

            <p className="text-cyan-200 text-sm md:text-base font-medium tracking-wide">
              El sistema generará una palabra y una pista al azar de nuestra base de datos encriptada. 
              Comparte el código con un amigo para hackear la red juntos.
            </p>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-2 w-full px-6 py-5 bg-pink-600 text-white font-bold uppercase tracking-[0.2em] hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] disabled:opacity-50 transition-all text-lg"
            >
              {loading ? "Generando Enlace..." : "Crear Sala Cooperativa"}
            </button>
          </form>
        </main>
        <Footer />
      </div>
    </div>
  );
}
