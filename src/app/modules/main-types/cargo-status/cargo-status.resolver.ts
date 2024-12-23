import { Routes } from '@angular/router';
import { CargoStatusComponent } from './cargo-status.component';

export default [
    {
        path: '',
        component: CargoStatusComponent,
        resolve: {
        },
    },
] as Routes;
