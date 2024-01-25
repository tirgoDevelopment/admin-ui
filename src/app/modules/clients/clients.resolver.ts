import { Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

export default [
    {
        path     : '',
        component: ClientsComponent,
        resolve  : {
        },
    },
] as Routes;
