<template>
  <article class="taskUpdate">
    <form class="update" @submit.prevent="updateTask()">
      <input type="text" v-model="name" autofocus/>
      <button class="btn" type="submit">Save</button>
    </form>
  </article>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      id: Number(this.$route.params.id),
    }
  },
  methods: {
    getData() {
      this.$store.state.tasks.forEach((item) => {
        if (item.id == this.id) {
          this.name = item.name
        }
      })
    },
    updateTask() {
      this.$store.dispatch("updateTask", { id: this.id, newName: this.name })
      this.$router.push({ path: "/" })
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped>
article {
  form {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;

    input {
      font-size: 18px;
      margin: 18px 0;
      margin-right: 20px;
      background: none;
      border: none;
      color: inherit;
      width: 100%;
      padding: 0;
      font-family: inherit;

      &:focus {
        border: none;
        outline: none;
      }
    }

    button {
        flex-shrink: 0;
        padding: 5px 7px;
        margin: 0;
        width: auto;
    }
  }
}
</style>
