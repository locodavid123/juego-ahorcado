import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ReglasPage() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#0d0221] font-mono relative overflow-hidden text-cyan-50">
      {/* 80s Synthwave Grid Background (Mismo estilo que la página principal) */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-[linear-gradient(rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom pointer-events-none opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 bottom-[50vh] bg-gradient-to-b from-[#0d0221] via-[#1a0b2e] to-[#2d0a42] pointer-events-none -z-10"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center flex-1">
        {/* Incluimos el Header modificado */}
        <Header />

        <main className="flex flex-1 w-full max-w-4xl flex-col items-center py-10 px-6">
          <div className="bg-[#0a001a]/85 border-2 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.2)] p-8 md:p-12 w-full relative">
            {/* Efecto visual de CRT / Scanline en el cuadro de reglas */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] mix-blend-overlay"></div>
            
            <h2 className="text-3xl md:text-5xl font-black italic tracking-widest text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] mb-8 text-center uppercase border-b-2 border-pink-500/50 pb-6">
              /// PROTOCOLO DE REGLAS
            </h2>

            <ul className="space-y-6 text-sm md:text-lg text-cyan-100 tracking-wide font-medium relative z-10">
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">01.</span>
                <p>El objetivo es <span className="text-pink-400 font-bold">adivinar la palabra secreta</span> antes de quedarte sin intentos y evitar que el sistema colapse.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">02.</span>
                <p>Tienes un máximo de <span className="text-pink-400 font-bold">6 fallos</span> permitidos. Cada letra incorrecta revelará una nueva pieza del diagrama en pantalla.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">03.</span>
                <p>Usa tu teclado físico o los botones en la pantalla para <span className="text-pink-400 font-bold">inyectar letras</span> y descubrir el código oculto.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">04.</span>
                <p>Si la situación se complica, puedes solicitar apoyo utilizando el botón de <span className="text-pink-400 font-bold">⚡ REVELAR PISTA</span> para obtener datos desencriptados.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">05.</span>
                <p>La partida termina cuando adivinas todas las letras (<span className="text-pink-400 font-bold">SYSTEM HACKED</span>) o cuando cometes 6 errores y se dibuja completo el personaje (<span className="text-red-500 font-bold">SYSTEM FAILURE</span>).</p>
              </li>
            </ul>

            <div className="mt-12 flex justify-center relative z-10">
               <Link 
                 href="/" 
                 className="px-8 py-4 border-2 border-pink-500 bg-pink-900/30 text-pink-300 font-bold uppercase tracking-[0.2em] hover:bg-pink-500 hover:text-white hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-200 active:scale-95"
               >
                 [ VOLVER AL SISTEMA ]
               </Link>
            </div>
          </div>
        </main>

        {/* Incluimos el Footer */}
        <Footer />
      </div>
    </div>
  );
}
