
const express = require("express");
const router = express.Router();

/**
 * Obtener un marcador
 */
router.get("/marcadores", (req, res) => {
    //res.send("Enpoint get de Marcadores");
    _controlador
    .consultarMarcador()
    .then(respuestaDB => {
      let marcador = respuestaDB.rows;
      res.send({ ok: true, info: marcador, mensaje: "Marcadores Consultados" });
    })
    .catch(error => {
      res.send(error);
    });
});

/**
 * Guardar un marcador
 */
router.post("/marcadores", (req, res) => {
    try {
        let info_marcador = req.body;
        //console.log(info_marcador);
        _controlador.validarMarcador(info_marcador);

        _controlador
            .guardarMarcador(info_marcador)
            .then(respuestaDB => {
                res.send({ ok: true, mensaje: "Marcador guardado", info: info_marcador });
            })
            .catch(error => {
                res.send(error);
            });

    } catch (error) {
        res.send(error);
    }
    //res.send("Enpoint post de Marcadores");
});

/**
 * Editar Marcador
 */


 /**
  * Eliminar Marcador
  */

module.exports = router