import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  items: MenuItem[] | undefined;

    constructor() {}

    ngOnInit() {
        this.items = [
            {
                label: 'Ropa',
                items: [
                    {
                        label: 'Hombre',
                        icon: 'pi pi-refresh',
                        command: () => {

                        }
                    },
                    {
                        label: 'Mujer',
                        icon: 'pi pi-times',
                        command: () => {

                        }
                    },
                    {
                      label: 'Niños',
                      icon: 'pi pi-times',
                      command: () => {

                      }
                  }
                ]
            },
            {
                label: 'Accesorios',
                items: [
                    {
                        label: 'Gorras',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Joyeria',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            },
            {
              label: 'Mas',
              items: [
                  {
                      label: 'Carteras de hombre',
                      icon: 'pi pi-external-link',
                      url: 'http://angular.io'
                  },
                  {
                      label: 'Carteras y bolsos de mujer',
                      icon: 'pi pi-upload',
                      routerLink: '/fileupload'
                  },
                  {
                    label: 'Electronica',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                  },
                  {
                    label: 'Todas las categorias',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                  }
              ]
          }
        ];
    }
}
