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
    id: 'Login',
  },
  {
    path: '/overview',
    exact: true,
    component: lazy(() => import('../pages/overview')),
    layout: Main,
    role: ['admin', 'guest'],
    title: 'Overview',
    id: 'Ringkasan',
  },
  {
    path: '/tickets',
    exact: true,
    component: lazy(() => import('../pages/tickets')),
    layout: Main,
    role: ['admin', 'guest'],
    title: 'Tickets',
    id: 'Tiket',
  },
  {
    path: '/tickets/:id',
    exact: true,
    component: lazy(() => import('../pages/tickets/components/Detail')),
    layout: Main,
    role: ['admin', 'guest'],
    title: 'Detail Tickets',
    id: 'Detail Tiket',
  },
  {
    path: '/ideas',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Ideas',
    id: 'Ide'
  },
  {
    path: '/contacts',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Contacts',
    id: 'Kontak',
  },
  {
    path: '/agents',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Agents',
    id: 'Agen',
  },
  {
    path: '/articles',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Articles',
    id: 'Artikel',
  },
  {
    path: '/settings',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Settings',
    id: 'Pengaturan',
  },
  {
    path: '/subscription',
    exact: true,
    component: lazy(() => import('../pages/under-development')),
    layout: Main,
    role: ['admin'],
    title: 'Subscription',
    id: 'Langganan',
  },
  {
    path: '/not-found',
    exact: true,
    component: lazy(() => import('../pages/not-found')),
    layout: NotFound,
    role: ['admin', 'guest'],
    title: 'Not Found',
    id: 'Tidak Ditemukan'
  },
  {
    path: '/*',
    exact: true,
    component: lazy(() => import('../pages/not-found')),
    layout: NotFound,
    role: ['admin', 'guest'],
    title: 'Not Found',
    id: 'Tidak Ditemukan'
  },
];

export { menus };
