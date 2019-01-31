# Test práctico Frontend

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto. La aplicación busca productos mediante la API de MercadoLibre.

Tanto el servidor como el cliente son proyectos separados para mayor comodidad.

## Tecnologías 

JavaScript ES6 (async/await, arrow function, spread operator, etc..)
Frontend: React, Redux, Sass
Backend: Node.js, Express

Estilos:
Uso de Sass, para el posicionamiento de elementos utilice CSS Grid y Flexbox.

## Como correr

### Servidor

```bash
cd backend
npm install
npm start
```

Por defecto, el backend recibe peticiones por `http://localhost:4000/`

### Cliente

```bash
cd frontend
npm install
npm start
```

Por defecto, el servidor de desarrollo abre en `http://localhost:3000/`
