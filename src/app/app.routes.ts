import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboards' },
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboards' },
    {
        path: 'auth',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes') },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes') },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes') },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes') },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes') }
        ]
    },
    {
        path: '',
        canActivate: [AuthGuard, ],
        canActivateChild: [AuthGuard,],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            {
                path: 'chats', loadChildren: () => import('app/modules/chat/chat.routes'),
                data: {
                    requiredPermissions: ['chat']
                }
            },
            {
                path: 'dashboards', loadChildren: () => import('app/modules/dashboards/dashboard.resolver'),
                data: {
                    requiredPermissions: ['dashboardPage']
                }
            },
            {
                path: 'admins', loadChildren: () => import('app/modules/admins/admins.resolver'),
                data: {
                    requiredPermissions: ['adminPage']
                }
            },
            // {
            //     path: 'secure-transaction', loadChildren: () => import('app/modules/secure-transaction/secure-transaction.resolver'),
            //     data: {
            //         requiredPermissions: ['ADMIN']
            //     }
            // },
            {
                path: 'clients', loadChildren: () => import('app/modules/clients/clients.resolver'),
                data: {
                    requiredPermissions: ['seeClientsInfo']
                }
            },
            {
                path: 'drivers', loadChildren: () => import('app/modules/drivers/drivers.resolver'),
                data: {
                    requiredPermissions: ['seeDriversInfo']
                }
            },
            {
                path: 'archived-users', loadChildren: () => import('app/modules/archive-user/archive-user.resolver'),
                data: {
                    requiredPermissions: ['archivedPage']
                }
            },
            {
                path: 'client-merchants', loadChildren: () => import('app/modules/merchant/merchant.resolver'),
                data: {
                    requiredPermissions: ['clientMerchantPage']
                }
            },
            {
                path: 'driver-merchants', loadChildren: () => import('app/modules/driver-merchant/driver-merchant.resolver'),
                data: {
                    requiredPermissions: ['driverMerchantPage']
                }
            },
            {
                path: 'orders', loadChildren: () => import('app/modules/orders/orders.resolver'),
                data: {
                    requiredPermissions: ['orderPage']
                }
            },
            {
                path: 'tracking', loadChildren: () => import('app/modules/tracking/tracking.resolver'),
                data: {
                    requiredPermissions: ['tracking']
                }
            },
            {
                path: 'types',
                data: {
                    requiredPermissions: ['referencesPage']
                },
                children: [
                    {
                        path: 'role', loadChildren: () => import('app/modules/main-types/role/role.resolver')
                    },
                    {
                        path: 'subcription', loadChildren: () => import('app/modules/main-types/subscription/subscription.resolver')
                    },
                    {
                        path: 'currency', loadChildren: () => import('app/modules/main-types/currency/currency.resolver')
                    },
                    {
                        path: 'transport', loadChildren: () => import('app/modules/main-types/transport/transport.resolver')
                    },
                    {
                        path: 'transport-cargo', loadChildren: () => import('app/modules/main-types/transport-cargo/transport-cargo.resolver')
                    },
                    {
                        path: 'cargo', loadChildren: () => import('app/modules/main-types/cargo/cargo.resolver')
                    },
                    {
                        path: 'cargo-status', loadChildren: () => import('app/modules/main-types/cargo-status/cargo-status.resolver')
                    },
                    {
                        path: 'cargo-group', loadChildren: () => import('app/modules/main-types/cargo-group/cargo-group.resolver')
                    },
                    {
                        path: 'cargo-package', loadChildren: () => import('app/modules/main-types/cargo-packages/cargo-packages.resolver')
                    },
                    {
                        path: 'cargo-loading-method', loadChildren: () => import('app/modules/main-types/cargo-loading-method/cargo-loading-method.resolver')
                    }
                ]
            },
            {
                path: 'chats', loadChildren: () => import('app/modules/chat/chat.routes'),
                data: {
                    requiredPermissions: ['chat']
                }
            },
            {
                path: 'active', loadChildren: () => import('app/modules/user-activity/user-activity.resolver'),
                data: {
                    requiredPermissions: ['activePage']
                }
            },
            {
                path: 'agents', loadChildren: () => import('app/modules/agents/agents.resolver'),
                data: {
                    requiredPermissions: ['adminAgentPage']
                }
            },
            {
                path: 'agent-module', loadChildren: () => import('app/modules/agent-module/agents-module.resolver'),
                data: {
                    requiredPermissions: ['agentPage']
                }
            },
            // {
            //     path: 'verification', loadChildren: () => import('app/modules/driver-verify/driver-verify.resolver'),
            //     data: {
            //         requiredPermissions: ['verification']
            //     }
            // },
            { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/shared/components/error-404/error-404.routes') },
            { path: '**', redirectTo: '404-not-found' }
        ]
    }
];
