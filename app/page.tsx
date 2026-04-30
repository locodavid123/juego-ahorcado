import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#0d0221] font-mono relative overflow-hidden text-cyan-50">
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-[linear-gradient(rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom pointer-events-none opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 bottom-[50vh] bg-gradient-to-b from-[#0d0221] via-[#1a0b2e] to-[#2d0a42] pointer-events-none -z-10"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center flex-1">
        <Header />

        <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-12 px-6">
          <div className="bg-[#0a001a]/85 border-2 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.2)] p-10 md:p-16 w-full relative flex flex-col items-center gap-10">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] mix-blend-overlay"></div>
            
            <h2 className="text-2xl md:text-4xl font-black tracking-widest text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] text-center uppercase">
              /// SELECCIONA EL MODO DE RED
            </h2>

            <div className="flex flex-col md:flex-row gap-6 w-full justify-center relative z-10">
              {/* Opción 1: Local */}
              <Link href="/local" className="flex-1 border-2 border-cyan-500 bg-cyan-950/40 p-8 flex flex-col items-center gap-4 hover:bg-cyan-900/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-2 transition-all duration-300 group">
                <span className="text-5xl group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">🕹️</span>
                <h3 className="text-2xl font-bold text-cyan-300 uppercase tracking-widest text-center">Modo Solo</h3>
                <p className="text-sm text-cyan-100/70 text-center">Adivina palabras de nuestra base de datos contra el sistema.</p>
              </Link>

              {/* Opción 2: Multijugador Crear */}
              <Link href="/online/crear" className="flex-1 border-2 border-pink-500 bg-pink-950/40 p-8 flex flex-col items-center gap-4 hover:bg-pink-900/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:-translate-y-2 transition-all duration-300 group">
                <span className="text-5xl group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">🌐</span>
                <h3 className="text-2xl font-bold text-pink-300 uppercase tracking-widest text-center">Crear Sala</h3>
                <p className="text-sm text-pink-100/70 text-center">Escribe una palabra secreta para que tu amigo la adivine.</p>
              </Link>

              {/* Opción 3: Multijugador Unirse */}
              <Link href="/online/unirse" className="flex-1 border-2 border-purple-500 bg-purple-950/40 p-8 flex flex-col items-center gap-4 hover:bg-purple-900/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-2 transition-all duration-300 group">
                <span className="text-5xl group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">🔌</span>
                <h3 className="text-2xl font-bold text-purple-300 uppercase tracking-widest text-center">Unirse a Sala</h3>
                <p className="text-sm text-purple-100/70 text-center">Ingresa el código de 4 dígitos para hackear la palabra de tu amigo.</p>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
