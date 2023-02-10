<template>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <!-- <task-data/> -->
  </footer>
</template>

<script>
import Task from "./components/Task.vue"
import CreateNewTask from "./components/CreateNewTask.vue"
import TaskData from "./components/TaskData.vue"
import TasksList from "./views/TasksList.vue"
import DeletedTasks from "./views/DeletedTasksList.vue"

export default {
  name: "App",
  components: {
    Task,
    CreateNewTask,
    TasksList,
    DeletedTasks,
    TaskData,
  },
  data() {
    return {}
  },
  methods: {
    loadTasks(storedTasks) {
      if (storedTasks) {
        this.$store.dispatch('loadTasks', storedTasks)
      }else {
        this.$store.dispatch('setSample', this.$store.getters.getSample)      
      }
    }
  },
  created() {
    this.loadTasks(this.$store.getters.getTasksLS)
  }
}
</script>

<style lang="scss">

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
  flex-direction: row;
  flex-wrap: nowrap;
  

 
}
</style>
