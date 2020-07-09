<template>
  <div>
    <v-text-field v-model="title" outlined @keypress.enter="searchMovies">
      <template v-slot:prepend-inner>
        <v-icon>search</v-icon>
      </template>
      <template v-slot:append>
        <v-progress-circular v-if="loading" size="24" color="primary" indeterminate/>
      </template>
    </v-text-field>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: '',
      loading: false
    }
  },
  methods: {
    async searchMovies () {
      this.loading = true
      const res = await axios.get(`https://www.omdbapi.com/?&apikey=88f9becd&s=${this.title}`)
      console.log(res.data)
      this.loading = false
    }
  }
}
</script>
