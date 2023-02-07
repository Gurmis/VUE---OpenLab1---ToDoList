<template>
  <div>
    <section class="tasks">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <task
            v-if="task.deleted"
            :name="task.name"
            :taskId="task.id"
            class="deleted"
          ></task>
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

export default {
  name: "DeletedTasks",
  components: {
    Task,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  }
}
</script>

<style lang="scss" scoped>
.deleted {
  text-decoration: line-through;
}


</style>
