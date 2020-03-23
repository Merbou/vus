import auth from "../modules/auth"

export default [

    { path: '*', redirect: '/' },// if route not existe redirect to /

    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
    },
    {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
    },
    ...auth

]  