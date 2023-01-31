<template>
  <div class="apiControls">
    <!-- <button class="getBtn btn" @click="getData()">test PUT</button> -->
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
        const newTask = {
          name: this.newTaskName,
          deleted: false,
        }
        axios
          .post(`tasks`, newTask)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      }
    },
    updateData(id) {
      axios
        .put(`tasks/${id}`, { deleted: true })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      // axios
      //   .put(`tasks/1`, { deleted: true })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err))
    },
  },
  mounted() {
    this.getData()

    //new task event
    this.emitter.on("new-task", (event) => {
      this.newTaskName = event
      this.postData()
    })

    //task remove event
    this.emitter.on("task-removal", (event) => {
      this.updateData(event)
    })
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
