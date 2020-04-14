
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
router.put("/marcadores", (req, res) => {
    try {
      let id = req.params.id;
      let info_marcador = req.body;

      editarMarcador(info_marcador, id)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "Marcador Editado", info: info_marcador });
        })
        .catch(error => {
          res.send(error);
        });
  
    } catch (error) {
      res.send(error);
    }
    
  });

/**
 * Eliminar Marcador
 */
router.delete("/marcadores", async (req, res) => {
    let info_reg = await req.body;
    _controlador
        .eliminar(info_reg)
        .then((respuestaDB) => {
            let registros = respuestaDB;
            res.send({ ok: true, info: registros, mensaje: "Marcador Eliminado" });
        })
        .catch((error) => {
            res.send(error);
        });
});

module.exports = router