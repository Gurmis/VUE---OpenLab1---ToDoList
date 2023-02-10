<template>
  <article @click="taskDetails()">
    <p>{{ name }}</p>

    <slot></slot>
    <button @click.stop="removeTask()">x</button>
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
      this.$store.dispatch("removeTask", this.taskId)
    },
    taskDetails() {
      this.$router.push({ path: `task/${this.taskId}` })
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  cursor: pointer;

  p {
    font-size: 18px;
    margin-right: 20px;
    text-align: start;
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
    padding: 0;

    &:hover {
      background: rgba(255, 255, 255, 0.603);
      color: whitesmoke;
      //   transform: scale(1.1);
    }

    &.btn {
      font-size: 1px;
    }
  }

  &.deleted button {
    display: none;
  }

  &:hover {
    background: var(--bg3Hover);
  }
}
</style>
