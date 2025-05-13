const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Ruta de prueba para clasificación
app.post('/clasificar', (req, res) => {
    res.json({ mensaje: 'Clasificación realizada correctamente (respuesta de ejemplo)' });
});

// Puerto asignado por Render o 3000 en local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
