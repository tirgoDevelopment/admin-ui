import { Routes } from '@angular/router';
import { CargoPackagesComponent } from './cargo-packages.component';

export default [
    {
        path: '',
        component: CargoPackagesComponent,
        resolve: {
        },
    },
] as Routes;
