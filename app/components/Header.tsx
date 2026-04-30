import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full max-w-5xl px-8 py-10 md:py-16 flex flex-col items-end">
            <nav className="flex gap-8 mb-16">
                <Link href="/" className="group relative text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white">
                    Inicio
                    <span className="absolute -bottom-1 right-0 h-px w-0 bg-black transition-all group-hover:w-full dark:bg-white"></span>
                </Link>
                <Link href="/reglas" className="group relative text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white">
                    Reglas
                    <span className="absolute -bottom-1 right-0 h-px w-0 bg-black transition-all group-hover:w-full dark:bg-white"></span>
                </Link>
            </nav>

            <div className="flex flex-col items-end text-right">
                <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-500 sm:text-9xl">
                    AHORCADO
                </h1>
                <p className="mt-6 max-w-md text-balance text-xl font-light tracking-wide text-zinc-500 dark:text-zinc-400">
                    Desafía tu mente y salva al personaje letra a letra.
                </p>
            </div>
        </header>
    );
}