import React from 'react';

const Signup = React.lazy(() => import('../pages/signup'));
const Home = React.lazy(() => import('../pages/home'));
const Signin = React.lazy(() => import('../pages/signin'));

export const routeArr = [
    {
        component : Signin,
        path: '/',
        exact: true
    },
    {
        component : Signup,
        path : '/signup',
        exact: true
    },
    {
        component : Home,
        path: '/home',
        exact: true
    },
    {
        component : Signin,
        path: '/signin',
        exact: true
    }
]