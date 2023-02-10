<template>
  <article @click="taskDetails()">
    <p>{{ name }}</p>

    <slot></slot>
    <button class="remove" @click.stop="removeTask()">x</button>
    <button class="restore" @click.stop="restoreTask()"><font-awesome-icon icon="fa-solid fa-rotate-left" /></button>
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
    restoreTask() {
      this.$store.dispatch("restoreTask", this.taskId)
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
    width: 25px;
    height: 25px;
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

  &.deleted button.remove {
    display: none;
  }

  &:not(.deleted) button.restore {
    display: none;
  }

  &:hover {
    background: var(--bg3Hover);
  }
}
</style>
