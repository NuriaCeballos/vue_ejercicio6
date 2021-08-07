import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Ejercicio6 from '../views/Ejercicio6.vue'
import Tablavista from '../views/Tablavista.vue'
import Provinciasvista from '../views/Provinciasvista.vue'
import Imagenvista from '../views/Imagenvista.vue'
import Vistacarrito from '../views/Vistacarrito.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    
  },
  
  {
    path: '/ejercicio6',
    name: 'Ejercicio6',
    component: Ejercicio6
    
  },
  {
    path: '/tablavista',
    name: 'Tablavista',
    component: Tablavista
    
  },
  {
    path: '/provinciasvista',
    name: 'Provinciasvista',
    component: Provinciasvista
    
  },
  {
    path: '/imagenvista',
    name: 'Imagenvista',
    component: Imagenvista
    
  },
  {
    path: '/vistacarrito',
    name: 'Vistacarrito',
    component: Vistacarrito
    
  }
 
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
