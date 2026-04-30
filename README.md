# 🎮 CYBER GAMES: Sistema de Recuperación de Datos (Ahorcado)

Este proyecto es una versión moderna y estilizada del clásico juego del "Ahorcado" desarrollado con **Next.js**, **React** y **Tailwind CSS**. Cuenta con una temática inmersiva "Retrofuturista / Synthwave de los 80s" (colores de neón cian y magenta, fondos cuadriculados y efectos de monitores antiguos).

---

## 🚀 Lo que se hizo en el proyecto

A lo largo del desarrollo, transformamos una aplicación vacía en un juego funcional con las siguientes implementaciones:
1. **Lógica de Estado Robusta**: Creación de un "Custom Hook" en React para manejar toda la jugabilidad y separarla de la interfaz visual.
2. **Sistema de Pistas Interactivo**: Se implementó la opción de revelar pistas relacionadas a la tecnología para cada palabra.
3. **Re-diseño Visual Completo (UI/UX)**: Implementación de la estética *Outrun/Cyberpunk*, con animaciones, luces de neón, botones mecánicos y efectos tipo *CRT Scanline*.
4. **Manejo de Rutas**: Creación de un menú para moverse fluidamente entre la pantalla de juego (`/`) y la pantalla del protocolo de reglas (`/REGLAS`).

---

## 🧠 Explicación de la Arquitectura y los Archivos

La aplicación está dividida en diferentes carpetas bajo el directorio `app/` para mantener un código limpio y profesional:

### 1. El "Cerebro" del Juego (Hooks y Lógica)
- **`app/hooks/useHangman.ts`**: Es el motor principal del juego. Este *hook* personalizado maneja todo el estado (state) de React. 
  - Genera la palabra aleatoria.
  - Almacena las letras correctas e incorrectas.
  - Calcula matemáticamente si el usuario ganó (todas las letras descubiertas) o si perdió (llegó a los 6 intentos).
  - Escucha tu teclado físico para agregar letras.

- **`app/lib/words.ts`**: Es nuestra "base de datos". Contiene un arreglo de objetos que guardan las palabras tecnológicas a adivinar y su respectiva pista desencriptada.

### 2. Páginas / Rutas (Pages)
- **`app/page.tsx`**: Es el archivo principal (el punto de entrada). Aquí se arma el rompecabezas uniendo la lógica (`useHangman`) con todos los componentes visuales. También maneja el estado que muestra u oculta el botón de pistas.
- **`app/REGLAS/page.tsx`**: Es una página dedicada exclusivamente a mostrar las instrucciones del juego, con un diseño temático de *terminal de hacker*.

### 3. Componentes Visuales (`app/components/`)
Estos archivos solo se encargan de **"cómo se ve"** el juego. No procesan reglas, solo obedecen lo que `page.tsx` les manda:
- **`Header.tsx` y `Footer.tsx`**: El encabezado con el gran logo de neón y la barra de navegación; y el pie de página con información del sistema.
- **`WordDisplay.tsx`**: Recibe la palabra secreta y dibuja líneas (estilo neón). Si adivinas la letra, la hace aparecer con una animación de luz rosa.
- **`Keyboard.tsx`**: El teclado virtual. Recibe qué letras ya fueron tocadas para pintarlas de gris (inactivas) y manda un aviso a `useHangman` cuando haces clic en una tecla nueva.
- **`HangmanDrawing.tsx`**: Un dibujo en formato `SVG`. Recibe cuántos "errores" tienes y en base a ese número dibuja la cabeza, el cuerpo, los brazos y las piernas del monigote.
- **`GameStatus.tsx`**: Es la pantalla de Game Over o Victoria. Es un aviso gigante que interrumpe la pantalla para informar el resultado (`SYSTEM HACKED` o `SYSTEM FAILURE`) y permite reiniciar el juego.

---

## 💻 ¿Cómo correr el proyecto localmente?

Abre la terminal en la raíz de tu proyecto e instala las dependencias si no lo has hecho:
```bash
npm install
```

Luego, inicia el servidor de desarrollo:
```bash
npm run dev
```
Finalmente, abre [http://localhost:3000](http://localhost:3000) en tu navegador.
