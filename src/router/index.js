import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Principal from '@/components/Principal'
import RegistroUsuario from '@/components/RegistroUsuario'
import RegistroEmpresa from '@/components/RegistroEmpresa'
import PreferenciasUsuario from '@/components/PreferenciasUsuario'
import InicioSesion from '@/components/InicioSesion'
import LinksRegistros from '@/components/LinksRegistros'
import ServiciosEmpresa from '@/components/ServiciosEmpresa'
import CartaEmpresa from '@/components/CartaEmpresa'
import Roles from '@/components/Roles'
import Restaurante from '@/components/Restaurante'
import Estadisticas from '@/components/Estadisticas'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Principal',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/RegistroUsuario',
      name: 'RegistroUsuario',
      component: RegistroUsuario
    },
    {
      path: '/RegistroEmpresa',
      name: 'RegistroEmpresa',
      component: RegistroEmpresa
    },
    {
      path: '/PreferenciasUsuario',
      name: 'PreferenciasUsuario',
      component: PreferenciasUsuario
    },
    {
      path: '/InicioSesion',
      name: 'InicioSesion',
      component: InicioSesion
    },
    {
      path: '/LinksRegistros',
      name: 'LinksRegistros',
      component: LinksRegistros
    },
    {
      path: '/ServiciosEmpresa',
      name: 'ServiciosEmpresa',
      component: ServiciosEmpresa
    },
    {
      path: '/CartaEmpresa',
      name: 'CartaEmpresa',
      component: CartaEmpresa
    },
    {
      path: '/Roles',
      name: 'Roles',
      component: Roles
    },
    {
      path: '/Estadisticas',
      name: 'Estadisticas',
      component: Estadisticas
    },
    {
      path: '/Restaurante/:id',
      name: 'Restaurante',
      component: Restaurante,
      meta: {
        requiresAuth: true
      }
    },
    
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") === null) {
      next({
        path: "/InicioSesion",
        params: { nextUrl: to.fullPath }
      })
    }
  }
  next();
})

export default router;