export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto border-t-2 border-pink-500/30 bg-[#0d0221]/90 backdrop-blur-md relative z-10 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase">
          SYSTEM_VER
        </span>
        <span className="text-pink-500 font-bold font-mono tracking-wider text-xs">
          v1.9.84
        </span>
      </div>
      <p className="mt-2 text-[10px] text-cyan-800/80 uppercase tracking-[0.2em] font-mono text-center">
        &copy; {new Date().getFullYear()} NÚCLEO CENTRAL DE DATOS. Todos los derechos reservados.
      </p>
    </footer>
  );
}
