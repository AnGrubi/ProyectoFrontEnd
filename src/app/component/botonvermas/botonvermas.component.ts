import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonvermas',
  templateUrl: './botonvermas.component.html',
  styleUrls: ['./botonvermas.component.css'],
})
export class BotonvermasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const scrollBtn = document.getElementById(
      'scroll-btn'
    ) as HTMLButtonElement;

    // Agregar un listener al botón de desplazamiento hacia abajo
    scrollBtn.addEventListener('click', () => scrollToPerfil());

    // Función para desplazarse a la sección de perfil de la página
    function scrollToPerfil() {
      // Obtener la posición de la sección de perfil
      const perfilSection = document.getElementById('perfil')!.offsetTop;

      // Desplazarse a la sección de perfil con una animación suave
      window.scrollTo({
        top: perfilSection,
        behavior: 'smooth',
      });
    }
  }
}
