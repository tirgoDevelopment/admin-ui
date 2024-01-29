import { Routes } from '@angular/router';
import { UserActivityComponent } from './user-activity.component';

export default [
    {
        path     : '',
        component: UserActivityComponent,
        resolve  : {
        },
    },
] as Routes;
