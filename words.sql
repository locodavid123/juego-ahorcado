CREATE TABLE words (
    id SERIAL PRIMARY KEY,
    word VARCHAR(50) NOT NULL,
    hint TEXT NOT NULL
);

INSERT INTO words (word, hint) VALUES 
('DESARROLLO', 'Proceso de crear o mejorar un producto de software.'),
('COMPUTADORA', 'Máquina electrónica para procesar información.'),
('PROGRAMACION', 'Acción de escribir código para crear aplicaciones.'),
('DESARROLLO', 'Proceso de crear o mejorar un producto de software.' ),
  ('COMPUTADORA','Máquina electrónica para procesar información.' ),
  ('PROGRAMACION','Acción de escribir código para crear aplicaciones.' ),
  ('TECLADO','Periférico de entrada con teclas.'),
  ('INTERNET','Red global de computadoras interconectadas.' ),
  ('NUBE','Almacenamiento y servicios a través de internet.' ),
  ('SERVIDOR','Computadora que provee datos o servicios a otras.' ),
  ('SISTEMA','Conjunto de elementos informáticos que interactúan entre sí.' ),
  ('LENGUAJE','Forma de comunicarse con la computadora (ej. Python, JS).' ),
  ('SOFTWARE','Parte lógica e intangible de un sistema informático.' ),
  ('HARDWARE','Parte física y tangible de una computadora.' ),
  ('PANTALLA','Dispositivo de salida visual.' ),
  ('CODIGO','Conjunto de instrucciones escritas por un programador.' ),
  ('VARIABLE','Espacio en memoria para almacenar un dato que puede cambiar.' ),
  ('FUNCION','Bloque de código reutilizable que realiza una tarea específica.' ),
  ('DATOS','Información cruda que procesa una computadora.' ),
 ('APLICACION','Programa diseñado para una tarea o usuario final.' ),
  ('"SEGURIDAD','Protección de información y sistemas contra amenazas.' ),
 ('REDES','Conexiones entre múltiples dispositivos para compartir recursos.' ),
  ('VIRTUAL','Algo que existe en software, no de forma física.' ),
  ('ALGORITMO','Secuencia de pasos lógicos para resolver un problema.' ),
  ('PROYECTO','Esfuerzo temporal para crear un producto o servicio único.' ),
  ('INTERFAZ','Punto de interacción entre el usuario y el sistema.' ),
  ('ARCHIVO','Conjunto de datos almacenados bajo un nombre.' ),
  ('MEMORIA', 'Componente donde se almacenan temporalmente los datos en uso.' ),
  ('TECNOLOGIA','Aplicación del conocimiento científico para fines prácticos.' ),
  ('NAVEGADOR','Software para visualizar páginas web (ej. Chrome, Firefox).' ),
  ('SITIO','Conjunto de páginas web bajo un mismo dominio.'),
  ('FRAMEWORK','Estructura base de código para facilitar el desarrollo.'),
  ('LIBRERIA','Colección de código preescrito que puedes usar en tu proyecto.' );




