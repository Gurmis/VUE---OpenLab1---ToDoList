import { createRouter, createWebHistory } from "vue-router"
import TasksList from "../views/TasksList.vue"
import DeletedTasksList from "../views/DeletedTasksList.vue"
import TaskDetails from "../views/TaskDetails.vue"

const routes = [
  { path: "/", name: "TasksList", component: TasksList },
  { path: "/deleted", name: "DeletedTasksList", component: DeletedTasksList },
  { path: "/task/:id", name: "task", component: TaskDetails },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
