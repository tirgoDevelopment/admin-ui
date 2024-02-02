import { Routes } from '@angular/router';
import { AgentsComponent } from './agents.component';
import { AgentDriverListComponent } from './components/agent-driver-list/agent-driver-list.component';

export default [
    {
        path: '',
        component: AgentsComponent,
        resolve: {
        },
    },
    {
        path: ':id',
        component: AgentDriverListComponent,
        resolve: {
        },
    }
] as Routes;
