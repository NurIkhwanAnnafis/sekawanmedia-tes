/* eslint-disable import/prefer-default-export */
import { lazy } from 'react';
import Login from '../components/layout/Login';
import Main from '../components/layout/Main';
import NotFound from '../components/layout/NotFound';

const menus = [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/auth')),
    layout: Login,
    role: [''],
    title: 'Login',
  },
  {
    path: '/overview',
    exact: true,
    component: lazy(() => import('../pages/overview')),
    layout: Main,
    role: ['admin', 'guest'],
    title: 'Overview',
  },
  {
    path: '/tickets',
    exact: true,
    component: lazy(() => import('../pages/tickets')),
    layout: Main,
    role: ['admin', 'guest'],
    title: 'Tickets',
  },
  {
    path: '/ideas',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Ideas',
  },
  {
    path: '/contacts',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Contacts',
  },
  {
    path: '/agents',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Agents',
  },
  {
    path: '/articles',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Articles',
  },
  {
    path: '/settings',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Settings',
  },
  {
    path: '/subscription',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Subscription',
  },
  {
    path: '/not-found',
    exact: true,
    component: lazy(() => import('../pages/not-found')),
    layout: NotFound,
    role: [''],
    title: 'Not Found',
  },
];

export { menus };
