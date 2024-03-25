import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    ButtonModule,
    AutoCompleteModule,

  ]
})
export class PrimengModule { }
