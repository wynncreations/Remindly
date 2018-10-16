<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"/>
    <input type="password" v-model="password" name="password" placeholder="password"/>
    <br>
    <button>Register</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  watch: {
    email (value) {
      console.log('email has change', value)
    },
    password (value) {
      console.log('password has changed', value)
    }
  }
}
</script>

<style scoped>

</style>
