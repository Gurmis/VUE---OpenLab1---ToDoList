<template>
  <form class="addNew" @submit.prevent="addNewTask(newTask)">
    <input
      type="text"
      placeholder="Enter task name"
      v-model="newTask"
      @input="newTaskUpdate(newTask)"
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
        this.$emit("add-task", task)
        this.emitter.emit("new-task", task)
        this.newTask = ""
      }
    },
    newTaskUpdate(task) {},
  },
  created() {
    this.emitter.on("newTaskReset", () => {
      this.newTask = ""
    })
  },
}
</script>

<style lang="scss" scoped></style>
