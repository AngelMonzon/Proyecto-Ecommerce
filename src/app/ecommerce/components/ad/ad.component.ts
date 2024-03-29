import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AdComponent {
  divs: string[] = ['Div 1', 'Div 2', 'Div 3'];
  currentIndex = 0;

  img: string[] = ["https://http2.mlstatic.com/D_NQ_719284-MLA75023736174_032024-OO.webp",
                   "https://http2.mlstatic.com/D_NQ_640002-MLA74441796692_022024-OO.webp",
                   "https://http2.mlstatic.com/D_NQ_704315-MLA75001214037_032024-OO.webp"]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.divs.length;
    }, 8000);
  }
}
