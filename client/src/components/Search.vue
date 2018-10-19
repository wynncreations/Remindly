<template>
  <div>
    <h1>Search</h1>
    <input type="text" v-model="zip" name="zip" placeholder="Zipcode"/>
    <br>
    <button>Search</button>
    {{weather}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      weather: ''
    }
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?zip=75110,us&APPID=def77ba41b64b1a678fa39e248d9225a')
      .then(response => (this.weather = response.data.list))
  }
}
</script>

<style scoped>

</style>
