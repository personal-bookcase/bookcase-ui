import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AddBookComponent } from './add-book/add-book.component';

const booksRoutes: Routes = [
  {
    path: 'books',
    component: MainComponent
  },
  {
    path: 'addBook',
    component: AddBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
