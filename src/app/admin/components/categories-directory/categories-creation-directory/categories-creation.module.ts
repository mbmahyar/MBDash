import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill'
//

import {CategoriesCreationComponent} from './categories-creation/categories-creation.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    QuillModule
  ],
  declarations: [
      CategoriesCreationComponent,
      BasicInformationComponent
  ]
})
export class CategoriesCreationModule { }
