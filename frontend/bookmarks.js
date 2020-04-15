/**
 * Este metodo permite validar que el nombre y la URl no sean nulas en los campos
 * @param {*} nombre 
 * @param {*} url 
 */
 let validaciones = (nombre, url) => {
    if (nombre == "") {
        return false;
    } else if (url == "") {
        return false;
    } else {
        return true;
    }
};

/**
 * Permite el registro de un marcador 
 */
let crearBookmark = () => {
    alert("Se Ingreso al Metodo")
    let urlBookmark = document.getElementById("url").value;
    let nombreBookmark = document.getElementById("nombre").value;
    let descripcionBookmark = document.getElementById("descripcion").value;
    if (validaciones(nombreBookmark, urlBookmark)) {
        params = {
            nombre: nombreBookmark,
            url: urlBookmark,
            descripcion: descripcionBookmark,
        };
        axios
            .post("http://localhost:3000/marcadores", params)
            .then((response) => {
                console.log("Bookmark Insertado");
                console.log(response);
            });
        nombreBookmark = document.getElementById("nombre").value = "";
        urlBookmark = document.getElementById("url").value = "";
        descripcionBookmark = document.getElementById("descripcion").value = "";
    } else {
        console.log("La URL y el nombre son obligatorios");
        
    }
};

/**
 * Permite consultar los marcadores de la base de datos registradas con el api
 */
var data = [];
let consultar = () => {
    axios.get("http://localhost:3000/marcadores").then((response) => {
        console.log("Respuesta del Api");
        console.log(response);
        registros = response.data.info;
        console.log(registros);
        let lista = document.getElementById("lista");
        let data = "";
        for (let i = 0; i < registros.length; i++) {
            let newBookmark = "";
            newBookmark = registros[i].row.toString();
            bookmarkData = [];
            bookmarkData = newBookmark.split(",");
            data += "<tr>";
            data += `<td>${bookmarkData[0].replace("(", "")}</td>`;
            data += `<td>${bookmarkData[1]}</td>`;
            data += `<td>${bookmarkData[2]} </td>`;
            data += `<td>${bookmarkData[3].replace(")", "")} </td>`;
            data += '<td><button type="button" onclick="eliminarBookmark(' + bookmarkData[0].replace("(", "") +
                ')" class="btn btn-danger btn-sm">Eliminar</button> </td>';
            data += `<td><button type="button" onclick="modificarBookmark(' + bookmarkData[0].splice("(", "") +
            ')" class="btn btn-primary btn-sm">Editar</button> </td>`
            data += "</tr>";
        }
        lista.innerHTML = data;
    });
};

let modificarBookmark = (id) => {
    data = {
        id: id,
    };
    axios.put("http://localhost:3000/marcadores/+id", { data }).then((response) => {
        consultar();
    });
    alert("Marcador Modificado");
};


/**
 * Elimina un marcador del aplicativo y de la base datos 
 * @param {*} id 
 */
let eliminarBookmark = (id) => {
    data = {
        id: id,
    };
    axios.delete("http://localhost:3000/marcadores", { data }).then((response) => {
        consultar();
    });
    alert("Marcador eliminado");
};

// Consulta los datos guardados en el Api
consultar();

