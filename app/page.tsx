import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-12 px-8 bg-white dark:bg-black shadow-sm">
        <div className="text-zinc-400 italic">El área de juego irá aquí...</div>
      </main>
    </div>
  );
}
