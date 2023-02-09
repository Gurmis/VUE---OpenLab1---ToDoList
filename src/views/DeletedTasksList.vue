<template>
  <div>
    <section class="tasks">
      <ul>
        <li v-for="task in deletedTasks" :key="task.id">
          <task :name="task.name" :taskId="task.id" class="deleted"></task>
        </li>
      </ul>
    </section>
    <aside class="container">
      <router-link class="routerBtn btn" to="/">Show active</router-link>
    </aside>
  </div>
</template>

<script>
import Task from "../components/Task.vue"
import { mapGetters } from "vuex"

export default {
  name: "DeletedTasks",
  components: {
    Task,
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

<style lang="scss" scoped>
.deleted {
  text-decoration: line-through;
}
</style>
