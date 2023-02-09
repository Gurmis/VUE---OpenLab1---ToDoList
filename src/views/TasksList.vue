<template>
  <div>
    <section class="tasks">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <task v-if="!task.deleted" :name="task.name" :taskId="task.id">
          </task>
        </li>
      </ul>
    </section>
    <aside class="container">
      <create-new-task @add-task="addNewTask($event)"></create-new-task>
      <router-link class="routerBtn btn" to="/deleted"
        >Show deleted</router-link
      >
    </aside>
  </div>
</template>

<script>
import Task from "../components/Task.vue"
import CreateNewTask from "../components/CreateNewTask.vue"
import { mapGetters } from "vuex"

export default {
  name: "Tasks",
  components: {
    Task,
    CreateNewTask,
  },
  methods: {
    addNewTask(task) {
      this.$store.dispatch("addTask", task)
    },
  },
  computed: {
    ...mapGetters({
      tasks: "getAllTasks",
      activeTasks: "getActiveTasks",
      deletedTasks: "getDeletedTasks",
    }),
  },
}
</script>

<style lang="scss" scoped></style>
