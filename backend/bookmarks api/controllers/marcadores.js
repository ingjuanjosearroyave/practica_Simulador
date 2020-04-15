
const ServicioPg = require("../services/postgres");

/**
 * 
 * @param {*} marcador 
 */
let validarMarcador = marcador => {
    if (!marcador) {
        throw { ok: false, mensaje: "La información del Marcador es obligatoria" };
    } else if (!marcador.nombre) {
        throw { ok: false, mensaje: "El Nombre es obligatorio" };
    } else if (!marcador.url) {
        throw { ok: false, mensaje: "La URL es obligatoria" };
    }
};


let guardarMarcador = async (marcador)  => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.marcador(
        url, nombre, descripcion)
       VALUES (
           '${marcador.url}',
           '${marcador.nombre}',
           '${marcador.descripcion}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


let consultarMarcador = async () => {
    let _servicio = new ServicioPg();
    let sql = `SELECT (id,url,nombre,descripcion) FROM public.marcador`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

/*
let editarMarcador = async (marcador, id) => {
    if(persona.id != id){
           throw { ok: false, mensaje: "El id enviado no corresponde" };
    }
    let _servicio = new ServicioPg();
    let sql = `UPDATE public.marcador set url = 
                '${marcador.url}',
                 nombre = '${marcador.nombre}',
                 descripcion = '${marcador.descripcion}'
                 WHERE id=${marcador.id}`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};*/

let eliminarMarcador = async(id) => {
    let _servicio = new ServicioPg();
    let sql = `DELETE FROM public.marcador WHERE documento='${id}'`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  };

module.exports = { validarMarcador, guardarMarcador, consultarMarcador, eliminarMarcador }