import { ComponentType, lazy, LazyExoticComponent } from 'react';

interface routeEntity {
    name: string;
    exact: boolean;
    path: string;
    // component: LazyExoticComponent<ComponentType<any>>;
    component: () => Promise<{
        default: ComponentType<any>;
    }>;
}

const routes: routeEntity[] = [
    {
        name: 'home',
        path: '/',
        component: () => import('../pages/home'),
        exact: true,
    },
];

export default routes;
