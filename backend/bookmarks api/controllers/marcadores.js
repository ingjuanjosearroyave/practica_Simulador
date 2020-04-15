
const ServicioPg = require("../services/postgres");

/**
 * valida
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

/**
 * guardar
 * @param {*} marcador 
 */
let guardarMarcador = async (marcador) => {
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

/**
 * Consulta en la base 
 */
let consultarMarcador = async () => {
    let _servicio = new ServicioPg();
    let sql = `SELECT (id,url,nombre,descripcion) FROM public.marcador`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

/**
 * 
 * @param {*} marcador 
 * @param {*} id 
 */
let editarMarcador = async (marcador, id) => {
    if (marcador.id != id) {
        throw {
            ok: false,
            mensaje: "El Id del Marcador no correspende al enviado.",
        };
    }
    console.log("NO ENTRO");
    
    let _servicio = new ServicioPg();
    let sql = `UPDATE public.marcador SET url = 
                '${marcador.url}',
                 nombre = '${marcador.nombre}',
                 descripcion = '${marcador.descripcion}'
                 WHERE id='${marcador.id}'`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

/**
 * 
 * @param {*} toDelete 
 */
let eliminarMarcador = async (toDelete) => {
    let _servicio = new ServicioPg();
    let sql = `DELETE FROM public.marcador WHERE id = ${toDelete.id}`
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
}

module.exports = { validarMarcador, guardarMarcador, consultarMarcador, eliminarMarcador, editarMarcador }