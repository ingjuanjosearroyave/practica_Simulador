
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
 * Consulta los datos ingresados en el api con Axios
 */
axios.get("http://localhost:3000/marcadores").then((response) => {
    console.log("Respuesta del api");
    console.log(response);
}).catch(error => {
    console.log(error);
})


/**
 * Insertar los datos ingresados en el Api's con Axios
 */
let crearBookmark = () => {
    try {
        let nombreBookmark = document.getElementById("nombre").value;
        let urlBookmark = document.getElementById("url").value;
        let descripcionBookmark = document.getElementById("descripcion").value;
        if (validar(nombreBookmark, urlBookmark)) {
            params = {
                nombre: nombreBookmark,
                url: urlBookmark,
                descripcion: descripcionBookmark,
            };
            axios
            .post("http://localhost:3000/marcadores", params)
            .then((response) => {});
            nombreBookmark = document.getElementById("nombre").value = "";
            urlBookmark = document.getElementById("url").value = "";
            descripcionBookmark = document.getElementById("descripcion").value = "";
        } else {
            alert("El nombre y la url son obligatorias");
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * Eliminar Bookmark
 */
let eliminarBookmark = (idP) => {
    data = {
        id: idP,
    };
    axios
        .delete("http://localhost:3000/marcadores", { data })
        .then((response) => {
            console.log("delete");
            console.log(response);
            consultar();
        });
    alert("Registrado eliminado");
};



var data = [];
let consultar = () => {
    axios.get("http://localhost:3000/marcadores").then((response) => {
        console.log("Respuesta del Api");
        console.log(response);
        registros = response.data.info;
        console.log(registros);
        let lista = document.getElementById("lista_Marcadores");
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
            data +=
                '<td><button type="button" onclick="eliminarBookmark(' +
                regi[0].replace("(", "") +
                ')" class="btn btn-danger btn-sm">Eliminar</button> </td>';
            data += "</tr>";
        }
        lista.innerHTML = data;
    });
};
