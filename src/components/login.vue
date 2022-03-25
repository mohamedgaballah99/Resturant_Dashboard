<template>
  <div class="login">
    <div class="img">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <h2>Login</h2>
    <form>
        <h4 class="red">{{error}}</h4>
      <input type="Email" v-model="email" placeholder="Enter Your Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Enter Your Password"
      />
      <button @click.prevent="login()">Login</button>
      <router-link to="/signup" class="haveacc">Create New Account..?</router-link>
    </form>
  </div>
</template>
<script>
import axios from "axios"; 
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error:"",
    };
  },
  methods: {
      async login(){
           let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.log(result);
        if (result.status == 200 && result.data.length > 0) {
            localStorage.setItem('user-info',JSON.stringify(result.data[0]))
            this.$router.push({name:'home'})
        }else{
            this.error="Email OR Password Incorrect"
        }
      },
       mounted() {
      let user = localStorage.getItem('user-info');
      if (user) {
        this.$router.push({name:'home'})
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.login {
  .img {
    width: 200px;
    height: auto;
    text-align: center;
    margin: auto;
    img {
      width: 100%;
    }
  }
  h2 {
    color: black;
    text-align: center;
    font-size: 40px;
    color: #000;
  }
  form {
    text-align: center;
    width: 40%;
    margin: auto;
    .red{
        color: red;
    }
    input {
      margin: auto;
      display: block;
      margin: 30px auto;
      padding: 10px;
      outline: none;
      width: 70%;
      border: 0.5px solid #f29400;
    }
    button {
      background-color: #8a151b;
      color: #fff;
      border: none;
      width: 200px;
      margin: auto !important;
      padding: 10px;
      font-size: 18px;
      display: block;
      text-align: center;
      text-align: center;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }
    .haveacc{
      color: red;
      margin: 10px 0px;
      display: block;
    }
  }
}
</style>
