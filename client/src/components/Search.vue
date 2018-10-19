<template>
  <div>
    <div class="container">
      <notifications group="error" />
      <h1>Search</h1>
      <input type="text" v-model="zip" name="zip" placeholder="Zipcode"/>
      <br>
      <button @click="getData">Search</button>
      {{weather}}
      {{zip}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Notifications from 'vue-notification'
export default {
  name: 'Search',
  data () {
    return {
      weather: '',
      zip: '',
      error: ''
    }
  },
  methods: {
    getData (zip) {
      axios
        .get('http://api.openweathermap.org/data/2.5/forecast?zip=' + this.zip + ',us&APPID=def77ba41b64b1a678fa39e248d9225a')
        .catch((error) => {
          this.error = error.response.data.message
          notify ({
            group: 'error',
            title: 'Error!',
            text: error.response.data.message
          })
        })
        .then((response) => {
          this.weather = response.data.list
        })
    }
  }
}
</script>

<style scoped>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
</style>
