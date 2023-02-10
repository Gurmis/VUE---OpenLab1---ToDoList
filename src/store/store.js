import { createStore } from "vuex"

// Create a new store instance.
export default createStore({
  state() {
    return {
      count: 0,
      tasks: [],
      sample: [
        { id: 1, name: "barber", deleted: false },
        { id: 2, name: "buy groceries", deleted: false },
        { id: 3, name: "buy dogfood", deleted: false },
        { id: 4, name: "pay bills", deleted: true },
      ],
    }
  },
  mutations: {
    loadTasks(state, tasks) {
      state.tasks = tasks
    },
    setSample(state, sample) {
      state.tasks = sample
    },
    addTask(state, task) {
      state.tasks.push(task)
    },
    removeTask(state, id) {
      state.tasks.forEach((task) => {
        if (task.id === id) {
          task.deleted = true
        }
      })
    },
    restoreTask(state, id) {
      state.tasks.forEach((task) => {
        if (task.id === id) {
          task.deleted = false
        }
      })
    },
    updateTask(state, updatedTask) {
      state.tasks.forEach((task) => {
        if (task.id === updatedTask.id) {
          task.name = updatedTask.newName
        }
      })
    },
  },
  actions: {
    loadTasks({ commit }, tasks) {
      commit("loadTasks", tasks)
    },
    setSample({ commit }, sample) {
      commit("setSample", sample)

      //save to local storage
      localStorage.setItem("tasks", JSON.stringify(sample))
    },
    addTask({ state, commit }, taskName) {
      const newTask = {
        id: state.tasks.length + 1,
        name: taskName,
        deleted: false,
      }
      commit("addTask", newTask)

      //save to local storage
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    removeTask({ state, commit }, taskId) {
      commit("removeTask", taskId)

      //save to local storage
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    restoreTask({ state, commit }, taskId) {
      commit("restoreTask", taskId)

      //save to local storage
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    updateTask({ state, commit }, updatedTask) {
      commit("updateTask", updatedTask)

      //save to local storage
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
  },
  getters: {
    getTasksLS() {
      return JSON.parse(localStorage.getItem("tasks"))
    },
    getAllTasks(state) {
      return state.tasks
    },
    getActiveTasks(state) {
      return state.tasks.filter((task) => task.deleted === false)
    },
    getDeletedTasks(state) {
      return state.tasks.filter((task) => task.deleted === true)
    },
    getSample(state) {
      return state.sample
    },
  },
})
