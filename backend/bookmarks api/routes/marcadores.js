
const express = require("express");
const router = express.Router();
const _controlador = require("../controllers/marcadores");

/**
 * Obtener un marcador
 */
router.get("/marcadores", (req, res) => {
  _controlador
    .consultarMarcador()
    .then(respuestaDB => {
      let marcador = respuestaDB.rows;
      res.send({ ok: true, info: marcador, mensaje: "Marcador Consultado" });
    })
    .catch(error => {
      res.send(error);
    });
});

/**
 * Guardar un marcador
 */
router.post("/marcadores", async (req, res) => {
  try {
    let info_marcador = await req.body;

    _controlador.validarMarcador(info_marcador);

    _controlador
      .guardarMarcador(info_marcador)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "Marcador Registrado", info: info_marcador });
      })
      .catch(error => {
        res.send(error);
      });

  } catch (error) {
    res.send(error);
  }
});

/**
 * Editar Marcador
 */
router.put("/marcadores/:id", (req, res) => {
  let id = req.params.id;
  let marcador = req.body;
  _controlador.editarMarcador(marcador, id)
    .then((respuestaDB) => {
      res.send({ ok: true, mensaje: "Marcador modificado", info: respuestaDB });
    })
    .catch((error) => {
      res.send(error);
    });
});


/**
 * Eliminar Marcador
 */
router.delete("/marcadores", async (req, res) => {
  let info_delete = await req.body;
  _controlador
    .eliminarMarcador(info_delete)
    .then((respuestaDB) => {
      let marcadores = respuestaDB;
      res.send({ ok: true, info: marcadores, mensaje: "Marcador Eliminado" });
    })
    .catch((error) => {
      res.send(error);
    });

});

module.exports = router