import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MatButtonModule,
  MatButtonToggleModule, 
  MatFormFieldModule,
   MatInputModule, 
   MatPaginatorModule, 
   MatSortModule, 
   MatTableModule
  } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [ MaterialComponents],
  exports: [ MaterialComponents]
})
export class MaterialModule { }
