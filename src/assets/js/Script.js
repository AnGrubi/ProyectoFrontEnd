// Agregar un listener al botón de desplazamiento hacia abajo
document.getElementById("scroll-btn").addEventListener("click", scrollToPerfil);

// Función para desplazarse a la sección de perfil de la página
function scrollToPerfil() {
  // Obtener la posición de la sección de perfil
  const perfilSection = document.getElementById("perfil").offsetTop;

  // Desplazarse a la sección de perfil con una animación suave
  window.scrollTo({
    top: perfilSection,
    behavior: "smooth",
  });
}
