import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-6xl px-6 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left side: Title and Subtitle */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-700 drop-shadow-lg select-none">
          AHORCADO
        </h1>
        <p className="mt-2 text-sm md:text-base font-medium tracking-wide text-blue-100/60 text-center w-full">
          Desafía tu mente y salva al personaje.
        </p>
      </div>

      {/* Right side: Navigation */}
      <nav className="flex items-center gap-6 px-8 py-4 rounded-full border border-gray-800/80 bg-zinc-950/80 shadow-lg">
        <Link 
          href="/" 
          className="text-xs md:text-sm font-bold tracking-widest text-gray-400 transition-colors hover:text-white uppercase"
        >
          INICIO
        </Link>
        <div className="w-[1px] h-5 bg-gray-800"></div>
        <Link 
          href="/reglas" 
          className="text-xs md:text-sm font-bold tracking-widest text-gray-400 transition-colors hover:text-white uppercase"
        >
          REGLAS
        </Link>
      </nav>
    </header>
  );
}