import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    ButtonModule,
    AutoCompleteModule,
    IconFieldModule,
    InputIconModule,
    MenuModule,
  ]
})
export class PrimengModule { }
