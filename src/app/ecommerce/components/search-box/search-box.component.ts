import { Component, OnInit, HostListener } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete/autocomplete.interface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {

  //Tamano del input
  size: number = 60;

  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [];


  ngOnInit(): void {
    this.size = (window.innerWidth * 60) / 1500;
  }


  search(event: AutoCompleteCompleteEvent) {
    // this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    this.suggestions = ["Adolfo"]
    console.log(event.originalEvent);
    console.log(event.query);
  }

  // Método que se ejecutará cuando cambie el tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.size = (window.innerWidth * 60) / 1500;
    console.log("El tamaño de la pantalla ha cambiado");
  }

}
