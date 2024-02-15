import { Routes } from '@angular/router';
import { MerchantComponent } from './merchant.component';
import { MerchantConfirmComponent } from './components/merchant-confirm/merchant-confirm.component';
import { MerchantModerationComponent } from './components/merchant-moderation/merchant-moderation.component';

export default [
    {
        path: '',
        component: MerchantComponent,
        resolve: {
        },

    },
    {
        path: 'moderation/:id',
        component: MerchantConfirmComponent,
        resolve: {
        },
    },
    {
        path: 'edit/:id',
        component: MerchantModerationComponent,
        resolve: {
        },
    }
] as Routes;
