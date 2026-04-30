import { NextResponse } from 'next/server';
import { getRandomWord } from '../../lib/words';

// Hack temporal para mantener el estado en memoria durante el desarrollo
declare global {
  var gamesData: Record<string, any>;
}

if (!global.gamesData) {
  global.gamesData = {};
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { word, hint } = body;
    
    // Si no se provee una palabra, el sistema selecciona una aleatoria de la base de datos
    if (!word) {
      const randomData = getRandomWord();
      word = randomData.word;
      hint = randomData.hint;
    }

    // Generar un código de 4 dígitos fácil de compartir
    let roomId = Math.floor(1000 + Math.random() * 9000).toString();
    
    // Asegurarse de que no exista
    while (global.gamesData[roomId]) {
      roomId = Math.floor(1000 + Math.random() * 9000).toString();
    }
    
    global.gamesData[roomId] = {
      id: roomId,
      wordToGuess: word.toUpperCase(),
      hint: hint || 'Sin pistas disponibles.',
      guessedLetters: [],
      status: 'playing', // 'playing', 'finished'
      createdAt: Date.now()
    };
    
    return NextResponse.json({ success: true, roomId });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
