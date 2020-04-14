const express = require("express");


const app = express();
var cors = require("cors");
app.use(cors());
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