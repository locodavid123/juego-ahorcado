import { NextResponse } from 'next/server';
import { getRandomWord } from '../../lib/words';

export const dynamic = 'force-dynamic'; // Evita que Next.js cachee la respuesta al hacer build
export const revalidate = 0; // Evita la regeneración estática

export async function GET() {
  const wordData = await getRandomWord();
  
  // Devolvemos la respuesta con cabeceras estrictas anti-caché
  return NextResponse.json(wordData, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    },
  });
}

export async function POST() {
  try {
    const wordData = await getRandomWord();
    
    // Generar un ID de sala aleatorio
    const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // Inicializar el objeto global si no existe
    if (!global.gamesData) {
      global.gamesData = {};
    }
    
    // Guardar el estado inicial del juego
    global.gamesData[roomId] = {
      wordToGuess: wordData.word,
      hint: wordData.hint,
      guessedLetters: [],
      status: 'playing'
    };
    
    return NextResponse.json({ success: true, roomId });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear la sala' }, { status: 500 });
  }
}