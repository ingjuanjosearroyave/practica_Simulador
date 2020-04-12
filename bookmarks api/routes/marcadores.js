
const express = require("express");
const router = express.Router();

/**
 * Obtener un marcador
 */
router.get("/marcadores", (req, res) => {
    res.send("Enpoint get de Marcadores");
});

/**
 * Guardar un marcador
 */
router.post("/marcadores", (req, res) => {
    let info_marcador = req.body;
    console.log(info_marcador);
    
    res.send("Enpoint post de Marcadores");
});

module.exports = router