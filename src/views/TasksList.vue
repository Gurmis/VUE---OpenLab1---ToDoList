<template>
  <div>
    <header>
      <p class="activeCount">Incomplete tasks: <span>{{activeCount}}</span></p>
    </header>
    <section class="tasks">
      <ul>
        <li v-for="task in activeTasks" :key="task.id">
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
    activeCount() {
      return this.activeTasks.length
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  p {
    letter-spacing: 0.8px;
    color: var(--font1);
    font-size: 15px;
    text-align: end;

    span {
      font-size: 17px;
      background: var(--btn1);
      border-radius: 50%;
      padding: 1px 6px;
    }
  }
}

</style>
