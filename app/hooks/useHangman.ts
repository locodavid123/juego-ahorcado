import { useState, useEffect, useCallback } from "react";
import type { WordEntry } from "../lib/words";

export function useHangman(maxAttempts: number = 6) {
  const [wordData, setWordData] = useState<WordEntry>({ word: "", hint: "" });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNewWord = async () => {
    setIsLoading(true);
    try {
      // Añadimos cache: 'no-store' y una marca de tiempo para evadir la caché del navegador y Next.js
      const response = await fetch(`/api/game?t=${Date.now()}`, {
        cache: 'no-store'
      });
      const data = await response.json();
      setWordData(data);
    } catch (error) {
      console.error("Error al obtener la palabra:", error);
      setWordData({ word: "SISTEMA", hint: "Fallo en la conexión de red." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewWord();
  }, []);

  const wordToGuess = wordData.word;
  const hint = wordData.hint;

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const correctLetters = guessedLetters.filter(
    (letter) => wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= maxAttempts;
  const isWinner =
    wordToGuess.length > 0 &&
    wordToGuess.split("").every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-zñ]$/i)) return;
      e.preventDefault();
      addGuessedLetter(key.toUpperCase());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter]);

  const restart = () => {
    setGuessedLetters([]);
    fetchNewWord();
  };

  return {
    wordToGuess,
    hint,
    guessedLetters,
    incorrectLetters,
    correctLetters,
    isLoser,
    isWinner,
    isLoading,
    addGuessedLetter,
    restart,
  };
}
