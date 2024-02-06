import { Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

export default [
    {
        path     : '',
        component: OrdersComponent,
        resolve  : {
        },
    },
] as Routes;
