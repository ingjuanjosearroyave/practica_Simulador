

let validaciones = (nombre, ur) => {
    if (nombre == "") {
        return false;
    } else if (url == "") {
        return false;
    } else {
        return true;
    }
};

/**
 * Consulta los datos ingresados en el api con Axios
 */
let consultarBookmark = () => {
    axios.get("http://localhost:3000/marcadores", params).then((response) => {
      console.log("Respuesta del api");
      console.log(response);
    })
    .catch(error => {
        console.log(error);
      })
};

/**
 * Insertar los datos ingresados en el Api's con Axios
 */
let crearBookmark = () => {
    let nombre = document.getElementById("nombre").value;
    let url = document.getElementById("url").value;
    let descripcion = document.getElementById("descripcion").value;
    params = {
        nombre: nombre,
        url: url,
        descripcion: descripcion,
      };
      axios
        .post("http://localhost:3000/marcadores", params)
        .then((response) => {});
      alert("Marcador registrado");

};
