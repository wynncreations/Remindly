<template>
  <div>
    <h1>Search</h1>
    <input type="text" v-model="zip" name="zip" placeholder="Zipcode"/>
    <br>
    <button @click="getData">Search</button>
    {{weather}}
    {{zip}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      weather: '',
      zip: ''
    }
  },
  methods: {
    getData (zip) {
      axios
        .get('http://api.openweathermap.org/data/2.5/forecast?zip=' + this.zip + ',us&APPID=def77ba41b64b1a678fa39e248d9225a')
        .then((response) => {
          for (var i = 39; i < response.data.list.length; i++) {
            this.weather = response.data.list[i]
            console.log(response.data.list[i])
          }
        })
      this.weather = JSON.parse(this.weather)
      return this.weather.clouds
    }
  }
}
</script>

<style scoped>

</style>
