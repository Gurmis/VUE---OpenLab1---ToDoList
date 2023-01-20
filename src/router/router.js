import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import DeletedTasks from '../views/DeletedTasks.vue'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/deleted',
    name: 'DeletedTasks',
    component: DeletedTasks
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router