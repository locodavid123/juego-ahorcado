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