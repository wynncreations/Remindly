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
      weather: [{}],
      zip: ''
    }
  },
  methods: {
    getData () {
      axios
        .get('http://api.openweathermap.org/data/2.5/forecast?zip=75110,us&APPID=def77ba41b64b1a678fa39e248d9225a')
        .then((response) => {
          for (var i = 0; i < response.data.list.length; i++) {
            this.weather.push(JSON.stringify(response.data.list[i]))
            console.log(response.data.list[i])
          }
        })
      return this.weather[0]
    }
  }
}
</script>

<style scoped>

</style>
