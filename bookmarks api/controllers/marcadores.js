


let validarMarcador = marcador => {
    if (!marcador) {
        throw { ok: false, mensaje: "la información del Marcador es obligatoria" };
    } else if (!marcador.nombre) {
        throw { ok: false, mensaje: "El Nombre es obligatorio" };
    } else if (!marcador.url) {
        throw { ok: false, mensaje: "la URL es obligatoria" };
    }
};

let guardarMarcador = async marcador => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.marcadores(
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
    let sql = `SELECT * FROM marcador`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let editarMarcador = async marcador => {

}

let eliminarMarcador = id => {

}

module.exports = { validarMarcador, consultarMarcador, editarMarcador, eliminarMarcador }