function mostrarFormulario(tipo) {
  var modal = document.getElementById("formularioModal");
  var titulo = document.getElementById("modalTitulo");
  var formulario = document.getElementById("formulario");
  modal.style.display = "block";

  // Agregar la animación suave de 3s
  modal.style.animation = "aparecerModal 3s ease-in-out";

  if (tipo === "registrar") {
    titulo.textContent = "Formulario de Registro";
    formulario.innerHTML = `
        <label for="correo">Correo:</label>
        <input type="email" id="correo" required>
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" required>
        <label for="contrasenia">Contraseña:</label>
        <input type="password" id="contrasenia" required>
        <button type="submit">Registrar</button>
      `;
  } else if (tipo === "iniciar") {
    titulo.textContent = "Formulario de Inicio de Sesión";
    formulario.innerHTML = `
        <label for="correo">Correo:</label>
        <input type="email" id="correo" required>
        <label for="contrasenia">Contraseña:</label>
        <input type="password" id="contrasenia" required>
        <button type="submit">Iniciar Sesión</button>
      `;
  }
}

// Función para cerrar el cuadro modal
function cerrarFormulario() {
  var modal = document.getElementById("formularioModal");
  modal.style.display = "none";
}
