<template>
  <div>
    <div class="container">
      <notifications group="error" position="center top" width="30%"/>
      <h1>Search</h1>
      <input type="text" v-model="zip" name="zip" placeholder="Zipcode"/>
      <br>
      <button @click="getData">Search</button>
      <li v-for="weather in weatherEvents">{{weather}}</li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      weather: '',
      zip: '',
      error: '',
      weatherEvents: ''
    }
  },
  methods: {
    getData (zip) {
      axios
        .get('http://api.openweathermap.org/data/2.5/forecast?zip=' + this.zip + ',us&APPID=def77ba41b64b1a678fa39e248d9225a')
        .catch((error) => {
          this.error = error.response.data.message
          this.$notify({
            group: 'error',
            type: 'warn',
            title: 'Error!',
            text: error.response.data.message + ' Please try a valid Zip Code!'
          })
          this.weather = ''
        })
        .then((response) => {
          this.weather = response.data.list
          for (var i = 0; i < this.weather.length; i++) {
            if (this.weather.weather[0].description === 'moderate rain' || this.weather.weather[0].description === 'heavy intensity rain' || this.weather.weather[0].description === 'light rain') {
              this.weatherEvents.push('Good fishing in the rain at ')
            }
          }
        })
    }
  }
}
</script>

<style scoped>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
</style>
