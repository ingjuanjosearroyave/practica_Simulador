
// Importar Librería express
const express = require("express");

// Inicializar librería
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Api Links de Interes en Internet");
});

//Importación de las rutas con los endpoints especificos
const rutas_marcadores = require("./routes/marcadores");
app.use(rutas_marcadores);

// Puerto
const port = 3000;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando el API en http://localhost:${port}`);
});