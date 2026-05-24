const express = require('express');
const app = express();

app.use(express.json());

// 1. Ruta raíz (GET http://localhost:3000)
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// 2. Ruta de saludo general (GET http://localhost:3000/saludo)
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// 3. Ruta dinámica con parámetro (GET http://localhost:3000/mensaje/juan)
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// 4. Ruta POST para recibir reportes de la comunidad (POST http://localhost:3000/reporte)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Configuración del puerto de escucha
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});