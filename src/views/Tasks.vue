<template>
  <div>
    <section class="tasks">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <task
            v-if="!task.deleted"
            :name="task.name"
            :taskId="task.id"
            @task-removal="removeTask($event)"
          >
          </task>
        </li>
      </ul>
    </section>
    <aside class="container">
      <create-new-task @add-task="addNewTask($event)"></create-new-task>
      <router-link class="routerBtn" to="/deleted">Show deleted</router-link>
    </aside>
  </div>
</template>

<script>
import Task from "../components/Task.vue"
import CreateNewTask from "../components/CreateNewTask.vue"
import {id, incrementId} from "../App.vue"

export default {
  name: "Tasks",
  components: {
    Task,
    CreateNewTask,
  },
  props: {
    tasks: Array,
  },
  methods: {
    addNewTask(taskName) {
      const newId = this.tasks.length + 1
      this.tasks.push({ id: incrementId(), name: taskName, deleted: false })
      console.log(this.tasks)
    },
    removeTask(id) {
      // this.tasks = this.tasks.filter((task) => (task.id !== id))
      this.tasks.forEach((task) => {
        if (task.id === id) {
          task.deleted = true
        }
      })
    },
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>

</style>
