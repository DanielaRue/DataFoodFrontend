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
import Estadisticas from '@/components/Reportes/Estadisticas'
import Dane from '@/components/Reportes/Dane'
import Instagram from '@/components/Reportes/Instagram'
import Facebook from '@/components/Reportes/Facebook'
import OtrosActores from '@/components/Reportes/OtrosActores'
import Google from '@/components/Reportes/Google'
import EnConstruccion from '@/components/EnConstruccion'
import Lugares from '@/components/Reportes/Lugares'
import Emociones from '@/components/Reportes/Emociones'
import PerfilUser from '@/components/PerfilUser'

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
      path: '/Restaurante',
      name: 'Restaurante',
      component: Restaurante,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/EnConstruccion',
      name: 'EnConstruccion',
      component: EnConstruccion
    },
    {
      path: '/Dane',
      name: 'Dane',
      component: Dane
    },
    {
      path: '/Instagram',
      name: 'Instagram',
      component: Instagram
    },
    {
      path: '/Facebook',
      name: 'Facebook',
      component: Facebook
    },
    {
      path: '/OtrosActores',
      name: 'OtrosActores',
      component: OtrosActores
    },
    {
      path: '/Google',
      name: 'Google',
      component: Google
    },
    {
      path: '/Lugares',
      name: 'Lugares',
      component: Lugares
    },
    {
      path: '/Emociones',
      name: 'Emociones',
      component: Emociones
    },
    {
      path: '/Perfil',
      name: 'PerfilUser',
      component: PerfilUser
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