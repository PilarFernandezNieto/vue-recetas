import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/Layout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'inicio',
                    component: () => import('@/views/InicioView.vue'),
                },
            ],
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthLayout,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/views/auth/LoginView.vue'),
                },
                {
                    path: 'registro',
                    name: 'registro',
                    component: () => import('@/views/auth/RegisterView.vue'),
                },
            ],
        },
        {
          path: '/admin',
          name: 'admin',
          component: AdminLayout,
          children: [
            {
              path: '',
              name: 'dashboard',
              component: () => import('@/views/admin/DashboardView.vue'),
            },
            {
              path: 'ingredientes',
              name: 'ingredientes',
              component: () => import('@/views/admin/IngredientesView.vue'),
            },
            {
              path: 'recetas',
              name: 'recetas',
              component: () => import('@/views/admin/RecetasView.vue'),
            },
            {
              path: 'usuarios',
              name: 'usuarios',
              component: () => import('@/views/admin/UsuariosView.vue'),
            }
          ]
        }
    ],
})

export default router
