import { Routes } from '@angular/router';
import { SecureTransactionComponent } from './secure-transaction.component';

export default [
    {
        path     : '',
        component: SecureTransactionComponent,
        resolve  : {
        },
    },
] as Routes;
