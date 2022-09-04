const tblRegistro = document.getElementById("tblgestor_datos");



let registros = (localStorage.getItem("registros")) ? JSON.parse(localStorage.getItem("registros")) : [];

const count = registros.length + 1;
console.log(count);

function agregar() {
	tblRegistro.innerHTML = `<tr class="table">
	<th width="mx-auto"><script>count</script></th>
	<th width="mx-auto"> <input type="text" class="form-control" id="txtNombre"> </th>
	<th width="mx-auto"> <input type="text" class="form-control" id="txtDepartamento"> </th>
	<th width="mx-auto"> <input type="text" class="form-control" id="txtEstatus"> </th>
	<th width="mx-auto"> <input type="text" class="form-control" id="txtPuesto"> </th>
	<th width="mx-auto"> 
		<button onclick="guardar()" type="button">
			<img class="iconbutton" src="assets/images/guardar.png" alt="Save">
		</button> 
		<button onclick="editar()" type="button">
            <img class="iconbutton" src="assets/images/editar.png" alt="Edit">
		</button>
		<button onclick="eliminar()" type="button">
            <img class="iconbutton" src="assets/images/eliminar.png" alt="Delete">
		</button>
	</th>
</tr>`    
}

const txtNombre = document.getElementById('txtNombre');
const txtDepartamento = document.getElementById('txtDepartamento');
const txtEstatus = document.getElementById('txtEstatus');
const txtPuesto = document.getElementById('xtPuesto');

console.log(`${txtNombre} ${txtDepartamento} ${txtEstatus} ${txtPuesto}`);

function guardar() {
	console.log(`${txtNombre} ${txtDepartamento} ${txtEstatus} ${txtPuesto}`);
	// console.log("Entró a la función Guardar");
	// const nombre = txtNombre.value;
	// const departamento = txtDepartamento.value;
	// const estatus = txtEstatus.value;
	// const puesto = txtPuesto.value;

	// console.log(`${nombre} ${departamento} ${estatus} ${puesto}`);
	// registros = [
	// 	// "Francisco", "Sistemas", "Activo", "Administrador"
	// 	nombre,
	// 	departamento,
	// 	estatus,
	// 	puesto
	// ];
	// registros.push(registros);
	// console.log(`Escribió ${registro}`);
	// console.log(registros);
	// actualizarStorage();
}