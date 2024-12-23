import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';

export default [
    {
        path     : '',
        component: AdminsComponent,
        resolve  : {
        },
    },
] as Routes;
