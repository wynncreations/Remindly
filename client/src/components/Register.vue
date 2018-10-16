<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"/>
    <input type="password" v-model="password" name="password" placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log('register button was clicked', this.email, this.password)
    }
  },
  watch: {
    email (value) {
      console.log('email has change', value)
    }
  }
}
</script>

<style scoped>

</style>
