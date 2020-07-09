import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    title: '',
    loading: false,
    movies: []
  }),
  getters: {},
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async searchMovies ({ state, commit }) {
      commit('updateState', {
        loading: true
      })
      const res = await axios.get(`https://www.omdbapi.com/?&apikey=88f9becd&s=${state.title}`)
      console.log(res.data)
      state.movies = res.data.Search
      commit('updateState', {
        loading: false
      })
    }
  }
}
