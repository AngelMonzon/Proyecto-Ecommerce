import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete/autocomplete.interface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] = [];

    search(event: AutoCompleteCompleteEvent) {
        // this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
        this.suggestions = ["Adolfo"]
        console.log(event.originalEvent);
        console.log(event.query);
    }
}
