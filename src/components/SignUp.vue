<template>
  <div class="signup">
    <div class="img">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <h2>SignUp</h2>
    <form>
        <h4 class="red">{{error}}</h4>
      <input type="text" v-model="name" placeholder="Enter Your Name" />
      <input type="Email" v-model="email" placeholder="Enter Your Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Enter Your Password"
      />
      <button @click.prevent="signUp()">Sign Up</button>
      <router-link to="/login" class="haveacc">AlReady Have Account..?</router-link>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error:"",
    };
  },
  methods: {
    async signUp() {
        //post => 201
        //get => 200
        
      let result = await axios.post("https://my-json-server.typicode.com/mohamedgaballah99/resturantapi/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201 && this.name !="" && this.email !="" && this.password !="") {
        localStorage.setItem('user-info',JSON.stringify(result.data))
        this.$router.push({name:'home'})
      }else{
          this.error="Please fill all Filed...?"
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (user) {
        this.$router.push({name:'home'})
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.signup {
  .img {
    width: 200px;
    // height: auto;
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
