<template>
  <main>
    <router-view :tasks="tasks" :taskId="id"></router-view>
  </main>
  <footer>
    <mock-controls @get-tasks="getData($event)"/>
  </footer>
</template>

<script>
import Task from "./components/Task.vue"
import CreateNewTask from "./components/CreateNewTask.vue"
import MockControls from "./components/MockControls.vue"
import Tasks from "./views/Tasks.vue"
import DeletedTasks from "./views/DeletedTasks.vue"

export let id = 0
export function incrementId(){
  return ++id
}

export default {
  name: "App",
  components: {
    Task,
    CreateNewTask,
    Tasks,
    DeletedTasks,
    MockControls
  },
  data() {
    return {
      newTask: "",
      id: id,
      tasks: [
        { id: ++id, name: "barber", deleted: false },
        { id: ++id, name: "buy groceries", deleted: false },
        { id: ++id, name: "buy dogfood", deleted: false },
      ],
    }
  },
  methods: {
    getData(data){
      this.tasks = data
    }
  },
  created() {
  },
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
