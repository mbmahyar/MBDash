import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
//
import {CategoriesListComponent} from './categories-list/categories-list.component';
import { CategoriesTableComponent } from './categories-table/categories-table.component';
import { CategoriesSearchComponent } from './categories-search/categories-search.component';
import { CategoriesCreationButtonComponent } from './categories-creation-button/categories-creation-button.component';
import { CategoriesPaginationComponent } from './categories-pagination/categories-pagination.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SweetAlert2Module
  ],
  declarations: [
      CategoriesListComponent,
      CategoriesTableComponent,
      CategoriesSearchComponent,
      CategoriesCreationButtonComponent,
      CategoriesPaginationComponent
  ]
})
export class CategoriesListModule { }
