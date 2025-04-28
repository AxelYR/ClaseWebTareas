function enviar() {
    const nombre = document.getElementById("fname").value;
    const email = document.getElementById("lemail").value;
    const telefono = document.getElementById("lphone").value;

    const tabla = document.querySelector("#tablaRegistros table"); // Selecciona la tabla
    const nuevaFila = document.createElement("tr"); // Crea nueva fila

    // Crea celdas
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;

    const celdaEmail = document.createElement("td");
    celdaEmail.textContent = email;

    const celdaTelefono = document.createElement("td");
    celdaTelefono.textContent = telefono;

    // Agrega celdas a la fila
    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaEmail);
    nuevaFila.appendChild(celdaTelefono);

    // Agrega fila a la tabla
    tabla.appendChild(nuevaFila);

    //limpiar los inputs
    document.getElementById("fname").value = '';
    document.getElementById("lemail").value = '';
    document.getElementById("lphone").value = '';
}
