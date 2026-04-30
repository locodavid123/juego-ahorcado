import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-8 border-t border-zinc-800/60 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side: Copyright */}
        <p className="text-xs md:text-sm font-medium tracking-wide text-gray-500">
          &copy; {new Date().getFullYear()} AHORCADO. Todos los derechos reservados.
        </p>

        {/* Right side: Links */}
        <nav className="flex items-center gap-6">
          <Link 
            href="/acerca-de" 
            className="text-xs font-bold tracking-widest text-gray-500 transition-colors hover:text-white uppercase"
          >
            Acerca de
          </Link>
          <div className="w-[1px] h-3 bg-gray-700"></div>
          <Link 
            href="/privacidad" 
            className="text-xs font-bold tracking-widest text-gray-500 transition-colors hover:text-white uppercase"
          >
            Privacidad
          </Link>
          <div className="w-[1px] h-3 bg-gray-700"></div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-bold tracking-widest text-gray-500 transition-colors hover:text-white uppercase"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
