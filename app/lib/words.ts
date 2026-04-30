export type WordEntry = {
  word: string;
  hint: string;
};

export const words: WordEntry[] = [
  { word: "DESARROLLO", hint: "Proceso de crear o mejorar un producto de software." },
  { word: "COMPUTADORA", hint: "Máquina electrónica para procesar información." },
  { word: "PROGRAMACION", hint: "Acción de escribir código para crear aplicaciones." },
  { word: "TECLADO", hint: "Periférico de entrada con teclas." },
  { word: "INTERNET", hint: "Red global de computadoras interconectadas." },
  { word: "NUBE", hint: "Almacenamiento y servicios a través de internet." },
  { word: "SERVIDOR", hint: "Computadora que provee datos o servicios a otras." },
  { word: "SISTEMA", hint: "Conjunto de elementos informáticos que interactúan entre sí." },
  { word: "LENGUAJE", hint: "Forma de comunicarse con la computadora (ej. Python, JS)." },
  { word: "SOFTWARE", hint: "Parte lógica e intangible de un sistema informático." },
  { word: "HARDWARE", hint: "Parte física y tangible de una computadora." },
  { word: "PANTALLA", hint: "Dispositivo de salida visual." },
  { word: "CODIGO", hint: "Conjunto de instrucciones escritas por un programador." },
  { word: "VARIABLE", hint: "Espacio en memoria para almacenar un dato que puede cambiar." },
  { word: "FUNCION", hint: "Bloque de código reutilizable que realiza una tarea específica." },
  { word: "DATOS", hint: "Información cruda que procesa una computadora." },
  { word: "APLICACION", hint: "Programa diseñado para una tarea o usuario final." },
  { word: "SEGURIDAD", hint: "Protección de información y sistemas contra amenazas." },
  { word: "REDES", hint: "Conexiones entre múltiples dispositivos para compartir recursos." },
  { word: "VIRTUAL", hint: "Algo que existe en software, no de forma física." },
  { word: "ALGORITMO", hint: "Secuencia de pasos lógicos para resolver un problema." },
  { word: "PROYECTO", hint: "Esfuerzo temporal para crear un producto o servicio único." },
  { word: "INTERFAZ", hint: "Punto de interacción entre el usuario y el sistema." },
  { word: "ARCHIVO", hint: "Conjunto de datos almacenados bajo un nombre." },
  { word: "MEMORIA", hint: "Componente donde se almacenan temporalmente los datos en uso." },
  { word: "TECNOLOGIA", hint: "Aplicación del conocimiento científico para fines prácticos." },
  { word: "NAVEGADOR", hint: "Software para visualizar páginas web (ej. Chrome, Firefox)." },
  { word: "SITIO", hint: "Conjunto de páginas web bajo un mismo dominio." },
  { word: "FRAMEWORK", hint: "Estructura base de código para facilitar el desarrollo." },
  { word: "LIBRERIA", hint: "Colección de código preescrito que puedes usar en tu proyecto." }
];

export function getRandomWord(): WordEntry {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
