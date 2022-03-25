<template>
<div class="add">
    <Header></Header>
    <h3 class="text-center m-3">Hello {{username}} Welcome to Add Resturant</h3>
    <div class="addform">
        <form>
            <div class="mb-3">
                <label class="form-label">Resturant Name </label>
                <input type="text" class="form-control" name="name" placeholder="Enter Resturant Name:" v-model="resturant.name">
            </div>
            <div class="mb-3">
                <label class="form-label">Resturant Contact</label>
                <input type="text" class="form-control" name="contact" placeholder="Enter Resturant Contact:" v-model="resturant.contact">
            </div>
            <div class="mb-3">
                <label class="form-label">Resturant Address</label>
                <input type="text" class="form-control" name="address" placeholder="Enter Resturant Address:" v-model="resturant.address">
            </div>

            <button class="btn btn-blue" @click.prevent="add()">Add Resturant</button>
        </form>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header';
import axios from 'axios';
export default {
    name: "Add",
    components: {
        Header,
    },
    data() {
        return {
            username: JSON.parse(localStorage.getItem('user-info')).name,
            resturant: {
                name: '',
                contact: '',
                address: '',
            }
        }
    },
    methods: {
        async add() {
          let add= await axios.post("https://my-json-server.typicode.com/mohamedgaballah99/resturantapi/resturant",{
            name:this.resturant.name,
            contact:this.resturant.contact,
            address:this.resturant.address
          })
          console.log(add);
          if (add.status == 201 && this.name !="" && this.contact !="" && this.address !="") {
        localStorage.setItem('add-info',JSON.stringify(add.data))
        this.$router.push({name:'home'})
        
      }else{
          this.error="Please fill all Filed...?"
      }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.add{
  .addform{
    width: 600px;
    margin: 20px auto;
  }
  .btn-blue{
    background: #8a151b;
    color: white !important;
  }
  label{
    font-weight: bold;
  }
}
</style>
