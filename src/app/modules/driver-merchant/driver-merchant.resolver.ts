import { Routes } from '@angular/router';
import { DriverMerchantComponent } from './driver-merchant.component';
import { DriverMerchantConfirmComponent } from './components/driver-merchant-confirm/driver-merchant-confirm.component';
import { DriverMerchantModerationComponent } from './components/driver-merchant-moderation/driver-merchant-moderation.component';

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
    }
] as Routes;
