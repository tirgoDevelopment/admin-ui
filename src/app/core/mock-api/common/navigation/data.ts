/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
// addDriver: new FormControl(''),
// addClient: new FormControl(''),
// addOrder: new FormControl(''),
// cancelOrder: new FormControl(''),
// seeDriversInfo: new FormControl(''),
// seeClientsInfo: new FormControl(''),
// sendPush: new FormControl(''),
// tracking: new FormControl(''),
// chat: new FormControl(''),
// clientMerchantFinance: new FormControl(''),
// driverMerchantFinance: new FormControl(''),
// registerClientMerchant: new FormControl(''),
// registerDriverMerchant: new FormControl(''),
// verifyDriver: new FormControl(''),
// clientMerchantList: new FormControl(''),
// driverMerchantList: new FormControl(''),
// adminPage: new FormControl(''),
// finRequest: new FormControl(''),
// driverMerchantPage: new FormControl(''),
// clientMerchantPage: new FormControl(''),
// driverVerification: new FormControl(''),
// driverFinance: new FormControl(''),
// agentPage: new FormControl(''),
// dashboardPage: new FormControl(''),
// archivedPage: new FormControl(''),
// orderPage: new FormControl(''),
// referencesPage: new FormControl(''),
// activePage: new FormControl(''),
// adminAgentPage: new FormControl(''),
// attachDriverAgent: new FormControl(''),
// addBalanceAgent: new FormControl(''),
// seeSubscriptionTransactionAgent: new FormControl(''),
// seePaymentTransactionAdmin: new FormControl(''),
// seeServiceTransactionAdmin: new FormControl(''),
export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        children: [
            {
                id: 'dashboards',
                title: 'control_panel',
                type: 'basic',
                icon: 'dashboard.svg',
                icon_w: 'dashboard-w.svg',
                link: '/dashboards',
                permission: ['dashboardPage']
            },
            {
                id: 'admins',
                title: 'adminstration',
                type: 'basic',
                icon: 'people.svg',
                icon_w: 'admin-w.svg',
                link: '/admins',
                permission: ['adminPage']
            },
            // {
            //     id: 'role',
            //     title: 'secure_transaction',
            //     type: 'basic',
            //     icon: 'role.svg',
            //     icon_w: 'role-w.svg',
            //     link: '/secure-transaction',
            // },
            {
                id: 'clients',
                title: 'clients',
                type: 'basic',
                icon: 'clients.svg',
                icon_w: 'client-w.svg',
                link: '/clients',
                permission: ['seeClientsInfo']
            },
            {
                id: 'drivers',
                title: 'drivers',
                type: 'basic',
                icon: 'drivers.svg',
                icon_w: 'driver-w.svg',
                link: '/drivers',
                permission: ['seeDriversInfo']
            },
            {
                id: 'archived-clients',
                title: 'archived_users',
                type: 'basic',
                icon_w: 'client-w.svg',
                icon: 'clients.svg',
                link: '/archived-users',
                permission: ['archivedPage']
            },
            {
                id: 'merchant',
                title: 'merchant',
                type: 'collapsable',
                icon_w: 'client-w.svg',
                icon: 'clients.svg',
                link: '/client-merchants',
                permission: ['clientMerchantList'],
                children: [
                    {
                        id: 'merchant.client',
                        title: 'merchant_client',
                        type: 'basic',
                        icon_w: 'client-w.svg',
                        icon: 'clients.svg',
                        link: '/client-merchants',
                        exactMatch: true,
                        permission: ['clientMerchantList'],
                    },
                    {
                        id: 'merchant.driver',
                        title: 'merchant_driver',
                        type: 'basic',
                        icon_w: 'client-w.svg',
                        icon: 'clients.svg',
                        link: '/driver-merchants',
                        exactMatch: true,
                        permission: ['driverMerchantList'],
                    },
                    {
                        id: 'agents',
                        title: 'agents',
                        type: 'basic',
                        icon_w: 'admin-w.svg',
                        icon: 'people.svg',
                        link: '/agents',
                        permission: ['adminAgentPage'],
                    },
                ],
            },
            {
                id: 'orders',
                title: 'orders',
                type: 'basic',
                icon: 'file.svg',
                icon_w: 'file-w.svg',
                link: '/orders',
                permission: ['orderPage'],
            },
            {
                id: 'tracking',
                title: 'tracking',
                type: 'basic',
                icon_w: 'tracking-w.svg',
                icon: 'tracking.svg',
                link: '/tracking',
                permission: ['tracking'],
            },
            {
                id: 'types',
                title: 'directories',
                type: 'collapsable',
                icon_w: 'list-w.svg',
                icon: 'list.svg',
                link: '/types/role',
                permission: ['referencesPage'],
                children: [
                    {
                        id: 'types.role',
                        title: 'user_roles',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/role',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.subcription',
                        title: 'subscription_types',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/subcription',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.currency',
                        title: 'currency',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/currency',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.car',
                        title: 'transport',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/transport',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.transport-cargo',
                        title: 'transport_cargo',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/transport-cargo',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.cargo',
                        title: 'cargo_type',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.cargo-status',
                        title: 'cargo_type_status',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo-status',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.cargo_group',
                        title: 'cargo_group_type',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo-group',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.package',
                        title: 'package',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo-package',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                    {
                        id: 'types.loading_method',
                        title: 'loading_method',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo-loading-method',
                        exactMatch: true,
                        permission: ['referencesPage'],
                    },
                ],
            },
            {
                id: 'chats',
                title: 'chat',
                type: 'basic',
                icon_w: 'chat-w.svg',
                icon: 'chat.svg',
                link: '/chats',
                permission: ['chat'],
            },
            {
                id: 'active',
                title: 'activity',
                type: 'basic',
                icon_w: 'computer-w.svg',
                icon: 'computer.svg',
                link: '/active',
                permission: ['activePage'],
            },
            // {
            //     id: 'verification',
            //     title: 'verification',
            //     type: 'basic',
            //     icon: 'verify.svg',
            //     icon_w: 'verify-w.svg',
            //     link: '/verification',
            // },
           
            {
                id: 'agents',
                title: 'agents',
                type: 'basic',
                icon_w: 'admin-w.svg',
                icon: 'people.svg',
                link: '/agent-module',
                permission: ['agentPage'],
            }
        ],
    }
];

