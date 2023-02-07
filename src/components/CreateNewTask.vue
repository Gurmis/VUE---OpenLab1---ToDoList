<template>
  <form class="addNew" @submit.prevent="addNewTask(newTask)">
    <input
      type="text"
      placeholder="Enter task name"
      v-model="newTask"
    />
    <button class="btn createNewBtn" type="submit">Add task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    }
  },
  methods: {
    addNewTask(task) {
      if (this.newTask) {
        this.$store.dispatch('addTask', task)
        this.newTask = ""
      }
    },
  },
  created() {
  },
}
</script>

<style lang="scss" scoped></style>
