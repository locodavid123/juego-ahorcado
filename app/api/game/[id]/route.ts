import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = global.gamesData?.[id];
  
  if (!game) {
    return NextResponse.json({ error: 'Sala no encontrada' }, { status: 404 });
  }
  
  return NextResponse.json(game);
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const game = global.gamesData?.[id];
    if (!game) {
      return NextResponse.json({ error: 'Sala no encontrada' }, { status: 404 });
    }

    const body = await req.json();
    const { action, letter, status } = body;

    // Acción para adivinar una letra
    if (action === 'guess' && letter) {
      const char = letter.toUpperCase();
      if (!game.guessedLetters.includes(char)) {
        game.guessedLetters.push(char);
      }
    }
    
    // Acción para actualizar el estado del juego (ej. terminó)
    if (action === 'updateStatus' && status) {
        game.status = status;
    }

    return NextResponse.json(game);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar la sala' }, { status: 500 });
  }
}
