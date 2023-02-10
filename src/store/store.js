import { createStore } from "vuex"

// Create a new store instance.
export default createStore({
  state() {
    return {
      count: 0,
      tasks: [
        { id: 1, name: "barber", deleted: false },
        { id: 2, name: "buy groceries", deleted: false },
        { id: 3, name: "buy dogfood", deleted: false },
        { id: 4, name: "pay bills", deleted: true },
      ],
    }
  },
  mutations: {
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
    addTask({ state, commit }, taskName) {
      const newId = state.tasks.length + 1
      commit("addTask", { id: newId, name: taskName, deleted: false })
    },
    removeTask({ commit }, taskId) {
      commit("removeTask", taskId)
    },
    restoreTask({ commit }, taskId) {
      commit("restoreTask", taskId)
    },
    updateTask({ commit }, updatedTask) {
      commit("updateTask", updatedTask)
    },
  },

getters: {
  getAllTasks(state) {
    return state.tasks
  },
  getActiveTasks(state) {
    return state.tasks.filter(task => task.deleted === false)
  },
  getDeletedTasks(state) {
    return state.tasks.filter(task => task.deleted === true)
  },

}
})
