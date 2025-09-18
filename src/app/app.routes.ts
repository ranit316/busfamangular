import { Routes } from '@angular/router';

import { FrontendComponent } from './layouts/frontend/layout/layout.component';
import { HomeComponent } from './frontend/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './layouts/admin/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { BannerComponent } from './admin/banner/banner.component';
import { AddBannerComponent } from './admin/add-banner/add-banner.component';

export const routes: Routes = [
    // frontend
    {
        path: '',
        component: FrontendComponent,
        children: [
            {path: '', component: HomeComponent}
        ]
    },

    //login
    {
        path: 'login',
        component: LoginComponent
    },

    //admin
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: DashboardComponent},
            {path: 'banner', component: BannerComponent},
            {path: 'add/banner', component: AddBannerComponent}
        ]
    }
];
