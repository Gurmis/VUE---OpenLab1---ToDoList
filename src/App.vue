<template>
  <main>
    <section class="tasks">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <task v-if="!task.deleted"
            :name="task.name"
            :taskId="task.id"
            :deleted="false"
            :id="task.id"
            @task-removal="removeTask($event)"
          ></task>
        </li>
      </ul>
    </section>
    <section class="newTaskForm">
      <create-new-task @add-task="addNewTask($event)"></create-new-task>
    </section>
  </main>
</template>

<script>
import Task from "./components/Task.vue"
import CreateNewTask from "./components/CreateNewTask.vue"

let id = 0

export default {
  name: "App",
  components: {
    Task,
    CreateNewTask,
  },
  data() {
    return {
      newTask: "",
      tasks: [
        { id: ++id, name: "barber", deleted: false},
        { id: ++id, name: "buy groceries", deleted: false},
        { id: ++id, name: "buy dogfood", deleted: false},
      ],
    }
  },
  methods: {
    addNewTask(taskName) {
      this.tasks.push({ id: ++id, name: taskName, deleted: false })
    },
    removeTask(id) {
      this.tasks.filter((task) => {
        if(task.id === id) {
          task.deleted = true
        }
      })
    },
  },
  created() {},
}
</script>

<style lang="scss">
.tasks {
  li {
    article {
      color: var(--font3);
      font-size: 14px;
      background: var(--bg3);
      border-radius: 5px;
      padding: 0 20px;
      margin: 12px auto;
      width: 100%;
      transition: border-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
      position: relative;
      word-break: break-word;
      display: flex;
      align-items: center;

      &:hover {
        background: var(--bg3Hover);
      }
    }
  }
}
</style>
