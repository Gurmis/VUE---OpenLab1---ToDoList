<template>
  <form class="addNew" @submit.prevent="addNewTask(newTask)">
    <input type="text" placeholder="Enter task name" v-model="newTask" />
    <button type="submit">Add task</button>
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
        this.$emit("add-task", task)
        this.newTask = ""
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
