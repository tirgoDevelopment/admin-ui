import { Routes } from '@angular/router';
import { CurrencyComponent } from './currency.component';

export default [
    {
        path: '',
        component: CurrencyComponent,
        resolve: {
        },
    },
] as Routes;
