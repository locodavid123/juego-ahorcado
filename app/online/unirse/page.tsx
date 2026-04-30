"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function UnirseSala() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 4) {
      router.push(`/online/sala/${code}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-[#0d0221] font-mono relative overflow-hidden text-cyan-50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center flex-1">
        <Header />

        <main className="flex flex-1 w-full max-w-lg flex-col items-center justify-center py-12 px-6">
          <form onSubmit={handleSubmit} className="bg-[#0a001a]/90 border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)] p-8 w-full flex flex-col gap-6 backdrop-blur-md">
            <h2 className="text-2xl font-black text-purple-400 uppercase tracking-widest text-center border-b-2 border-purple-500/30 pb-4">
              [ ENLAZAR CONEXIÓN ]
            </h2>

            <div className="flex flex-col gap-2 items-center">
              <label className="text-sm font-bold text-cyan-300 uppercase tracking-widest text-center">
                Código de Acceso (4 Dígitos):
              </label>
              <input 
                type="text" 
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                className="bg-black/80 border-2 border-cyan-500 p-4 text-4xl text-center text-white outline-none focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.5)] tracking-[0.5em] font-bold w-48"
                placeholder="0000"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={code.length !== 4}
              className="mt-4 px-6 py-4 bg-purple-600 text-white font-bold uppercase tracking-[0.2em] hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] disabled:opacity-50 transition-all"
            >
              Infiltrarse
            </button>
          </form>
        </main>
        <Footer />
      </div>
    </div>
  );
}
