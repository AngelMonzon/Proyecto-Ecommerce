import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  offers: any[] = [
    {
      img: "hola.img",
      description: "Ofertas de hoy"
    },
    {
      img: "hola.img",
      description: "3 articulos por $250"
    },
    {
      img: "hola.img",
      description: "Variedad de gorras"
    },
    {
      img: "hola.img",
      description: "Electronica"
    },
    {
      img: "hola.img",
      description: "Productos para tu Barber Shop"
    },
  ];
}
