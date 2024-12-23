import { Routes } from '@angular/router';
import { DriverMerchantComponent } from './driver-merchant.component';
import { DriverMerchantConfirmComponent } from './components/driver-merchant-confirm/driver-merchant-confirm.component';
import { DriverMerchantModerationComponent } from './components/driver-merchant-moderation/driver-merchant-moderation.component';
import { DriverMerchantDriverListComponent } from './components/driver-merchant-driver-list/driver-merchant-driver-list.component';

export default [
    {
        path: '',
        component: DriverMerchantComponent,
        resolve: {
        },

    },
    {
        path: 'moderation/:id',
        component: DriverMerchantConfirmComponent,
        resolve: {
        },
    },
    {
        path: 'edit/:id',
        component: DriverMerchantModerationComponent,
        resolve: {
        },
    },
    {
        path: 'driver/:id',
        component: DriverMerchantDriverListComponent,
        resolve: {
        },
    }
] as Routes;
