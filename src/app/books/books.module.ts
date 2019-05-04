import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { MainComponent } from './main/main.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [MainComponent, AddBookComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
