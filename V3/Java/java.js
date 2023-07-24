var menuVisible = false;

function toggleMenu() {
  var menuDesplegable = document.getElementById("menuDesplegable");
  if (menuVisible) {
    menuDesplegable.style.left = "-250px"; // Ocultar el menú
  } else {
    menuDesplegable.style.left = "0"; // Mostrar el menú
  }
  menuVisible = !menuVisible; // Cambiar el estado de visibilidad del menú
}