<template>
  <div class="apiControls">
    <button class="getBtn btn" @click="getData()">GET</button>
    <button class="postBtn btn" @click="postData()">POST</button>
  </div>
</template>

<script>
import axios from 'axios'

const serverUrl = "https://mockend.com/Gurmis/VUE---OpenLab1---ToDoList/"

export default {
  data() {
    return {
        newTask: ''
    }
  },
  methods: {
    getData() {
      axios
        .get(`${serverUrl}tasks`)
        .then((tasks) => {
          this.$emit("get-tasks", tasks.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    postData() {
        if(this.newTask)
      axios
        .post(`${serverUrl}tasks`, {
          name: this.newTask,
          deleted: false,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        this.newTask = ''
    },
  },
  created() {

        this.emitter.on('new-task', (event) => {
            this.newTask = event
        })
    
  }
}
</script>

<style lang="scss" scoped>
.apiControls {
  display: flex;
  justify-content: center;
  gap: 20px;

  .btn {
    background: var(--ruler);

    &:hover {
        background: transparentize($color: white, $amount: 0.85);
    }
  }
}
</style>
