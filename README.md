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

- **`app/lib/words.ts`**: Es nuestra conexión a la **base de datos PostgreSQL**. Ejecuta consultas SQL seguras para extraer una palabra aleatoria y su pista directamente desde el servidor.

### 2. Rutas de API (Backend)
- **`app/api/game/route.ts`**: Es el endpoint principal que conecta el frontend con la base de datos. Gestiona la extracción de palabras de manera dinámica, aplicando cabeceras estrictas (`Cache-Control: no-store`) para evadir la caché de Next.js y garantizar una palabra nueva en cada partida.

### 3. Páginas / Rutas (Frontend)
- **`app/page.tsx`**: Es el menú principal del sistema. Permite al usuario seleccionar el modo de red (Modo Solo, Crear Sala o Unirse a Sala).
- **`app/local/page.tsx`**: Aquí se arma el rompecabezas uniendo la lógica (`useHangman`) con los componentes visuales para el modo de un jugador.
- **`app/online/crear/page.tsx`**: Interfaz para generar una nueva sala cooperativa. Se comunica con el backend mediante peticiones `POST` para inicializar una sesión multijugador.
- **`app/REGLAS/page.tsx`**: Es una página dedicada exclusivamente a mostrar las instrucciones del juego, con un diseño temático de *terminal de hacker*.

### 4. Componentes Visuales (`app/components/`)
Estos archivos solo se encargan de **"cómo se ve"** el juego. No procesan reglas, solo obedecen lo que `page.tsx` les manda:
- **`Header.tsx` y `Footer.tsx`**: El encabezado con el gran logo de neón y la barra de navegación; y el pie de página con información del sistema.
- **`Background.tsx`**: Componente reutilizable que dibuja la cuadrícula en 3D (estilo Outrun/Synthwave) que sirve de fondo para todas las vistas del juego.
- **`WordDisplay.tsx`**: Recibe la palabra secreta y dibuja líneas (estilo neón). Si adivinas la letra, la hace aparecer con una animación de luz rosa.
- **`Keyboard.tsx`**: El teclado virtual. Recibe qué letras ya fueron tocadas para pintarlas de gris (inactivas) y manda un aviso a `useHangman` cuando haces clic en una tecla nueva.
- **`HangmanDrawing.tsx`**: Un dibujo en formato `SVG`. Recibe cuántos "errores" tienes y en base a ese número dibuja la cabeza, el cuerpo, los brazos y las piernas del monigote.
- **`GameStatus.tsx`**: Es la pantalla de Game Over o Victoria. Es un aviso gigante que interrumpe la pantalla para informar el resultado (`SYSTEM HACKED` o `SYSTEM FAILURE`) y permite reiniciar el juego.

---

## 💻 ¿Cómo correr el proyecto localmente con Docker?

Este proyecto utiliza **Docker y Docker Compose** para orquestar todos los servicios necesarios: la base de datos PostgreSQL, dos instancias de la aplicación Next.js y un balanceador de carga Nginx. Todo está configurado para ejecutarse con un solo comando.

### Requisitos previos:
Asegúrate de tener instalado **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** en tu computadora y que esté en ejecución.

### Pasos para iniciar:

1. Abre una terminal en la carpeta principal del proyecto (donde se encuentra el archivo `docker-compose.yml`).
2. Ejecuta el siguiente comando para construir y levantar todos los contenedores:
```bash
docker-compose up --build
```
*(Si prefieres que la terminal quede libre, puedes agregar `-d` al final del comando).*

3. ¡Listo! La base de datos se inicializará automáticamente con las palabras, y Nginx distribuirá el tráfico entre los contenedores de la aplicación.
4. Finalmente, abre **[http://localhost](http://localhost)** en tu navegador web.
