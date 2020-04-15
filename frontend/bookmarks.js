
 let validaciones = (nombre, url) => {
    if (nombre == "") {
        return false;
    } else if (url == "") {
        return false;
    } else {
        return true;
    }
};

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
            data += `<td><button type="button" class="btn btn-primary btn-sm">Editar</button> </td>`
            data += "</tr>";
        }
        lista.innerHTML = data;
    });
};

let eliminarBookmark = (idR) => {
    data = {
        id: idR,
    };
    axios.delete("http://localhost:3000/marcadores", { data }).then((response) => {
        consultar();
    });
    alert("Marcador eliminado");
};

consultar();
