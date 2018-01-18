import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { NotFoundComponent } from './public/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
