import { createRouter, createWebHistory } from 'vue-router'

import VacationModePage from '../views/VacationModePage.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(), routes: [
    { path: '/', name: 'HomePage', component: VacationModePage }, {
      path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }
  ]
})

export default router;