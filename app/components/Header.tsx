import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-6xl px-6 py-8 flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] select-none">
          CYBER
          <span className="text-pink-500 bg-clip-text bg-gradient-to-b from-pink-400 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">GAMES</span>
        </h1>
        <p className="mt-2 text-[10px] md:text-xs font-bold tracking-widest text-pink-400 text-center w-full uppercase drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] max-w-lg leading-relaxed">
          Demuestra tu habilidad con las palabras y evita que caiga la soga.
        </p>
      </div>

      <nav className="mt-6 flex items-center gap-8 px-8 py-2 border-b-2 border-cyan-500/50 bg-black/40 shadow-[0_4px_20px_rgba(34,211,238,0.15)] backdrop-blur-sm">
        <Link
          href="/"
          className="text-xs md:text-sm font-bold tracking-[0.2em] text-cyan-500 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] uppercase"
        >
          INICIO
        </Link>
        <div className="w-[2px] h-4 bg-pink-500/50 shadow-[0_0_5px_rgba(236,72,153,0.8)]"></div>
        <Link
          href="/REGLAS"
          className="text-xs md:text-sm font-bold tracking-[0.2em] text-pink-500 transition-all hover:text-pink-300 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] uppercase"
        >
          REGLAS
        </Link>
      </nav>
    </header>
  );
}