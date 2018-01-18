import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import {CategoriesCreationModule} from './categories-creation-directory/categories-creation.module';
import {CategoriesListModule} from './categories-list-directory/categories-list.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CategoriesCreationModule,
    CategoriesListModule
  ],
  declarations: []
})
export class CategoriesModule { }
