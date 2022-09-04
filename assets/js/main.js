(function () {
	"use strict";

	var treeviewMenu = $('.app-menu');

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').click(function (event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	// Activate sidebar treeview toggle
	$("[data-toggle='treeview']").click(function (event) {
		event.preventDefault();
		if (!$(this).parent().hasClass('is-expanded')) {
			treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	// Set initial active toggle
	$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();

/* 
=============================
=== Creación del C.R.U.D. ===
=============================
*/

// console.log("Entro al main.js");

const txtPelicula = document.getElementById('txtPelicula');
const tblPeliculas = document.getElementById('tblPeliculas');

let peliculas = (localStorage.getItem("peliculas")) ? JSON.parse(localStorage.getItem("peliculas")) : [];

mostrasPeliculas();

function guardar() {
    // console.log("Entró a la función Guardar");
    const pelicula = txtPelicula.value;
    peliculas.push(pelicula);
    console.log(`Escribió ${pelicula}`);
    console.log(peliculas);
    actualizarStorage();
}

function actualizarStorage() {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    mostrasPeliculas();
}

function mostrasPeliculas() {
    if (peliculas.length === 0) {
        tblPeliculas.innerHTML = `<tr class="text-center font-weight-bold">
        <td colspan="2">NO HAY REGISTROS</td>
        </tr>`;
    } else {
        tblPeliculas.innerHTML = ""; //Limpiar para que no se recarguen

        for (const pelicula of peliculas) {
            const tr = document.createElement("tr"); //Crear renglon de la tabla
            const tdPelicula = document.createElement("td");
            tdPelicula.innerText = pelicula;
            
            tr.appendChild(tdPelicula);
            tblPeliculas.appendChild(tr);

            const tdAcciones = document.createElement("td");

            const btnEliminar = document.createElement("button");
            btnEliminar.innerText = "Eliminar";
            btnEliminar.classList.add("btn","btn-danger");
            btnEliminar.onclick = () => eliminar(pelicula);

            const btnEditar = document.createElement("button");
            btnEditar.innerText = "Editar";
            btnEditar.classList.add("btn","btn-warning", "ml-2");
            btnEditar.onclick = () => editar(pelicula);

            tdAcciones.appendChild(btnEliminar);
            tdAcciones.appendChild(btnEditar);
            tr.appendChild(tdAcciones);          

            // tdAcciones.innerHTML = `<td class="text-center">
            // <button class="btn btn-warning">Editar</button>
            // <button class="btn btn-danger">Eliminar</button>
            // </td>`;
        }
    }
}

function eliminar(pelicula){
    const index = peliculas.indexOf(pelicula);
    peliculas.splice(index, 1);
    actualizarStorage();
}

function editar(pelicula){
    const index = peliculas.indexOf(pelicula);
    const nuevoNombrePelicula = prompt(`Ingrese el nuevo nombre de la película actual: ${pelicula}`)
    peliculas[index] = nuevoNombrePelicula;
    actualizarStorage();
}