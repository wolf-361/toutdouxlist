import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TodolistGroupComponent } from 'src/app/models/todolist-group/todolist-group.component';


@NgModule({
  declarations: [TodolistGroupComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [TodolistGroupComponent],
})
export class SharedModule { }
