import { Routes } from '@angular/router';

import { FrontendComponent } from './layouts/frontend/layout/layout.component';
import { HomeComponent } from './frontend/home/home.component';

export const routes: Routes = [
    // frontend
    {
        path: '',
        component: FrontendComponent,
        children: [
            {path: '', component: HomeComponent}
        ]
    }
];
