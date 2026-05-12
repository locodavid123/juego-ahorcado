declare global {
  var gamesData: Record<string, {
    wordToGuess: string;
    hint: string;
    guessedLetters: string[];
    status: 'playing' | 'finished';
  }>;
}

export {};
