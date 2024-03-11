/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

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
            },
            {
                id: 'admins',
                title: 'adminstration',
                type: 'basic',
                icon: 'people.svg',
                icon_w: 'admin-w.svg',
                link: '/admins',
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
            },
            {
                id: 'drivers',
                title: 'drivers',
                type: 'basic',
                icon: 'drivers.svg',
                icon_w: 'driver-w.svg',
                link: '/drivers',
            },
            {
                id: 'archived-clients',
                title: 'archived_users',
                type: 'basic',
                icon_w: 'client-w.svg',
                icon: 'clients.svg',
                link: '/archived-users',
            },
            {
                id: 'merchant',
                title: 'merchant',
                type: 'collapsable',
                icon_w: 'client-w.svg',
                icon: 'clients.svg',
                link: '/client-merchants',
                children: [
                    {
                        id: 'merchant.client',
                        title: 'merchant_client',
                        type: 'basic',
                        icon_w: 'client-w.svg',
                        icon: 'clients.svg',
                        link: '/client-merchants',
                        exactMatch: true,
                    },
                    {
                        id: 'merchant.driver',
                        title: 'merchant_driver',
                        type: 'basic',
                        icon_w: 'client-w.svg',
                        icon: 'clients.svg',
                        link: '/driver-merchants',
                        exactMatch: true,
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
            },
            {
                id: 'tracking',
                title: 'tracking',
                type: 'basic',
                icon_w: 'tracking-w.svg',
                icon: 'tracking.svg',
                link: '/tracking',
            },
            {
                id: 'types',
                title: 'directories',
                type: 'collapsable',
                icon_w: 'list-w.svg',
                icon: 'list.svg',
                link: '/types/role',
                children: [
                    {
                        id: 'types.role',
                        title: 'user_roles',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/role',
                        exactMatch: true,
                    },
                    {
                        id: 'types.subcription',
                        title: 'subscription_types',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/subcription',
                        exactMatch: true,
                    },
                    {
                        id: 'types.currency',
                        title: 'currency',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/currency',
                        exactMatch: true,
                    },
                    {
                        id: 'types.car',
                        title: 'transport',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/transport',
                        exactMatch: true,
                    },
                    {
                        id: 'types.transport-cargo',
                        title: 'transport_cargo',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/transport-cargo',
                        exactMatch: true,
                    },
                    {
                        id: 'types.cargo',
                        title: 'cargo_type',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo',
                        exactMatch: true,
                    },
                    {
                        id: 'types.cargo-status',
                        title: 'cargo_type_status',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo-status',
                        exactMatch: true,
                    },
                    {
                        id: 'types.cargo_group',
                        title: 'cargo_group_type',
                        type: 'basic',
                        icon: 'file.svg',
                        icon_w: 'file-w.svg',
                        link: '/types/cargo-group',
                        exactMatch: true,
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
            },
            {
                id: 'active',
                title: 'activity',
                type: 'basic',
                icon_w: 'computer-w.svg',
                icon: 'computer.svg',
                link: '/active',
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
                link: '/agents',
            },
            {
                id: 'agents',
                title: 'agents',
                type: 'basic',
                icon_w: 'admin-w.svg',
                icon: 'people.svg',
                link: '/agent-module',
            }
        ],
    }
];

