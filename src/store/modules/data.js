export default {
  namespaced: true,
  state: {
    data: [],
    sortedData: []
  },
  mutations: {
    SET_DATA (state, payload) {
      state.data = payload
    },
    SET_SORTEDDATA (state, payload) {
      state.sortedData = payload
    }
  },
  actions: {
    async fetchGetData ({ commit, getters }) {
      await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        return response.json()
      }).then((data) => {
        commit('SET_DATA', data)
      })
    },
    sortData ({ commit, getters }) {
      let sorted = []
      const restructure = []
      const usersSet = new Set(getters.GET_DATA.map(dataPart => dataPart.userId))
      usersSet.forEach(setElement => {
        restructure.push({
          userId: setElement,
          completed: 0,
          uncompleted: 0,
          titles: []
        })
      })
      sorted = getters.GET_DATA.reduce((accumulator, currentValue) => {
        if (currentValue.completed) {
          accumulator[currentValue.userId - 1].completed++
        } else {
          accumulator[currentValue.userId - 1].uncompleted++
        }
        accumulator[currentValue.userId - 1].titles.push({
          id: currentValue.id,
          title: currentValue.title,
          completed: currentValue.completed
        })
        return accumulator
      }, restructure)
      sorted.sort((a, b) => {
        if (a.completed < b.completed) {
          return 1
        } else if (a.completed > b.completed) {
          return -1
        } else if (a.userId < b.userId) {
          return -1
        } else {
          return 1
        }
      })
      commit('SET_SORTEDDATA', sorted)
    }
  },
  getters: {
    GET_DATA: (state) => {
      return state.data
    },
    GET_SORTEDDATA: (state) => {
      return state.sortedData
    }
  }
}
