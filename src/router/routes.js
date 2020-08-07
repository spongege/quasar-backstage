const UserLayout = () => import('layouts/UserLayout.vue')
const Login = () => import('pages/Login.vue')

const ManageLayout = () => import('layouts/ManageLayout.vue')
const Index = () => import('pages/Index.vue')
const routes = [
  {
    path: '/',
    component: UserLayout,
    children: [
      { path: '', redirect: { name: 'login' } },
      { path: 'login', name: 'login', component: Login }
    ]
  },
  {
    path: '/manage',
    component: ManageLayout,
    children: [{ path: '', component: Index }]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
