<template>
  <div>
    <section class="tasks">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <task
            v-if="task.deleted"
            :name="task.name"
            :taskId="task.id"
            @task-removal="removeTask($event)"
            class="deleted"
          ></task>
        </li>
      </ul>
    </section>
    <aside class="container">
      <router-link class="routerBtn" to="/">Show active</router-link>
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
  props: {
    tasks: Array,
  },
}
</script>

<style lang="scss" scoped>
.deleted {
  text-decoration: line-through;
}


</style>
