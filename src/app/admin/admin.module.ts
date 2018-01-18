import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AdminRootComponent} from './admin-root/admin-root.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';

import {AdminRoutingModule} from './admin-routing.module';
import {CategoriesModule} from './components/categories-directory/categories.module';
//
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


@NgModule({
    declarations: [
        AdminRootComponent,
        ToolbarComponent,
        SidebarComponent,
        AdminHomeComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AdminRoutingModule,
        CategoriesModule,
        PerfectScrollbarModule
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class AdminModule {
}
