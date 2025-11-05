function cargarFormulario() {
    fetch('formRegistro.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mostrarForm').innerHTML = data;
            document.getElementById('mostrarForm').style.display = 'block';
        })
        .catch(error => console.error('Error cargando el formulario:', error));
}

function accionesForm() {
    const tipoEmpleado = document.getElementById("tipo").value;
        const accionesDiv = document.getElementById("accionesDiv");

        if (tipoEmpleado === "jefe") {
            accionesDiv.style.display = "block"; // Muestra el campo si es Jefe
        } else {
            accionesDiv.style.display = "none"; // Oculta el campo si no es Jefe
        }
}

function cargarFormEliminar() {
    fetch('formEliminar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mostrarFormEliminar').innerHTML = data;
            document.getElementById('mostrarFormEliminar').style.display = 'block';
        })
        .catch(error => console.error('Error cargando la seccion de Eliminar:', error));
}

//Confirmacion de eliminacion
function openModal() {
    const idTrabajador = document.getElementById("id").value.trim();
    if (idTrabajador !== "") {
        document.getElementById('modalEliminar').style.display = 'flex';
    }
    else {
        alert("Debe ingresar el ID del trabajador a eliminar.");
        }
}
function closeModal() {
    document.getElementById('modalEliminar').style.display = 'none';
}

function confirmarEliminacion() {
    const idTrabajador = document.getElementById("id").value.trim();
    if (idTrabajador !== "") {
        alert(`Trabajador con ID ${idTrabajador} eliminado.`);
        closeModal(); // Cierra el modal después de confirmar
    } else {
        alert("Error: ID no válido.");
    }
}

function cargarFormBuscar() {
    fetch('formBuscar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mostrarFormBuscar').innerHTML = data;
            document.getElementById('mostrarFormBuscar').style.display = 'block';
        })
        .catch(error => console.error('Error cargando el buscador:', error));
}