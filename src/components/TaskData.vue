<template>
  <div class="apiControls">
    <button class="getBtn btn" @click="getData()">GET</button>
    <!-- <button class="postBtn btn" @click="postData()">POST</button> -->
  </div>
</template>

<script>
import axios from "axios"

// const serverUrl = "https://mockend.com/Gurmis/VUE---OpenLab1---ToDoList/"

export default {
  data() {
    return {
      newTaskName: "",
    }
  },
  methods: {
    getData() {
      axios
        .get(`tasks`)
        .then((tasks) => {
          // this.$emit("get-tasks", tasks.data)
          this.emitter.emit("tasks", tasks.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    postData() {
      if (this.newTaskName) {
        const newId = 1
        const newTask = {
          id: newId,
          name: this.newTaskName,
          deleted: false,
        }
        axios
          .post(`tasks`, newTask)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
        console.log(newTask)
      }
    },
  },
  mounted() {
    this.emitter.on("new-task", (event) => {
      this.newTaskName = event
      this.postData()
    })
    this.getData()
  },
}
</script>

<style lang="scss" scoped>
.apiControls {
  display: flex;
  justify-content: center;
  gap: 20px;

  .btn {
    width: 60%;
    background: var(--ruler);

    &:hover {
      background: transparentize($color: white, $amount: 0.85);
    }
  }
}
</style>
