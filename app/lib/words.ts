
import { Pool } from 'pg';

export type WordEntry = {
  word: string;
  hint: string;
};

// Configuración del Pool de conexiones a PostgreSQL
const pool = new Pool({
  user: 'postgres', // Usuario por defecto de postgres
  host: 'localhost',
  database: 'words', // Nombre de la base de datos
  password: '123456', // Tu contraseña
  port: 5432, // Puerto por defecto
});

export async function getRandomWord(): Promise<WordEntry> {
  try {
    // Consulta directa para traer una fila al azar
    const result = await pool.query('SELECT word, hint FROM words ORDER BY RANDOM() LIMIT 1;');
    
    if (result.rows.length > 0) {
      return result.rows[0] as WordEntry;
    }
    
    throw new Error("No se encontraron palabras en la base de datos.");
  } catch (error) {
    console.error("Error obteniendo palabra de la base de datos:", error);
    // Fallback de seguridad por si falla la conexión temporalmente
    return { word: "SISTEMA", hint: "Fallo en la conexión de base de datos." };
  }
}
