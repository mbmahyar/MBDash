import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ADMIN_ROUTER} from './constants/router';
//
import {AdminRootComponent} from './admin-root/admin-root.component';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {CategoriesCreationComponent} from './components/categories-directory/categories-creation-directory/categories-creation/categories-creation.component';
import {CategoriesListComponent} from './components/categories-directory/categories-list-directory/categories-list/categories-list.component';

const adminRoutes: Routes = [
    {  path: ADMIN_ROUTER.ADMIN_ROOT_ROUTE,
        component: AdminRootComponent,
        children: [
            {
                path: '',
                redirectTo: ADMIN_ROUTER.ADMIN_HOME_ROUTE,
                pathMatch: 'full'
            },
            {
                path: ADMIN_ROUTER.ADMIN_HOME_ROUTE,
                component: AdminHomeComponent
            },
            {
                path: ADMIN_ROUTER.ADMIN_CATEGORIES_CREATION_ROUTE,
                component: CategoriesCreationComponent
            },
            {
                path: ADMIN_ROUTER.ADMIN_CATEGORIES_LIST_ROUTE,
                component: CategoriesListComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
