<template>
  <article>
    <p>{{ name }}</p>
    <slot></slot>
    <button @click="removeTask()">x</button>
  </article>
</template>

<script>
export default {
  name: "Task",
  props: {
    name: String,
    taskId: Number,
    deleted: Boolean,
  },
  methods: {
    removeTask() {
      this.$emit("task-removal", this.taskId)
      this.emitter.emit("task-removal", this.taskId)
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;
  margin-right: 20px;
}
button {
  width: 20px;
  height: 20px;
  margin-left: auto;
  background: rgba(255, 255, 255, 0.703);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.603);
    color: whitesmoke;
    //   transform: scale(1.1);
  }
}
article.deleted button {
  display: none;
}
</style>
