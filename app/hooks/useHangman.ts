import { useState, useEffect, useCallback } from "react";
import { getRandomWord, WordEntry } from "../lib/words";

export function useHangman(maxAttempts: number = 6) {
  const [wordData, setWordData] = useState<WordEntry>({ word: "", hint: "" });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    setWordData(getRandomWord());
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
    setWordData(getRandomWord());
  };

  return {
    wordToGuess,
    hint,
    guessedLetters,
    incorrectLetters,
    correctLetters,
    isLoser,
    isWinner,
    addGuessedLetter,
    restart,
  };
}
