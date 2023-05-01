import { Component, OnInit } from '@angular/core';
import { PortfolioangularService } from 'src/app/servicios/portfolioangular.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private datosportfolioangular: PortfolioangularService) {}

  ngOnInit(): void {
    this.datosportfolioangular.obtenerDatos();
  }
}
