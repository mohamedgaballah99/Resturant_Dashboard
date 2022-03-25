<template>
<div class="home">
    <Header></Header>
    <h3 class="text-center m-3">Hello {{username}} Welcome to Home Page </h3>
    <h5 v-if="counter==1" id="alert">Updated Successfully
        <span @click="hide()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </span>
    </h5>
    <h5 v-if="del==1" id="alert">Deleted Successfully
        <span @click="hidedel()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </span>
    </h5>

    <div class="container">
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Address</th>
                    <th scope="col">Operations</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rest in resturant" :key="rest.id">
                    <td>{{rest.id}}</td>
                    <td>{{rest.name}}</td>
                    <td>{{rest.contact}}</td>
                    <td>{{rest.address}}</td>
                    <td>
                        <router-link :to="'/update/'+rest.id" class="btn btn-warning">Update</router-link>
                        <a class="btn btn-danger" @click="deleteresturant(rest.id)">Delete</a>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    <!-- <info></info> -->
</div>
</template>

<script>
import Header from '@/components/Header';
import axios from 'axios';
// import info from '@/components/info';
// import api from '../db/db.json';
export default {
    name: "home",
    components: {
        Header,
        // info
    },
    data() {
        return {
            // resultApi:api,
            username: JSON.parse(localStorage.getItem('user-info')).name,
            resturant: [],
            counter: localStorage.getItem('counter'),
            del: localStorage.getItem('del')
        }
    },
    methods: {
        hide() {
            this.counter = 0,
                localStorage.setItem('counter', this.counter)
        },
        hidedel(){
             this.del = 0,
                localStorage.setItem('del', this.del)
        },
        async deleteresturant(id){
            
           let result = await axios.delete('https://my-json-server.typicode.com/mohamedgaballah99/resturantapi/resturant/'+id)
           console.log(result);
           if (result.status==200) {
               this.loaddata()
               this.del = 1,
                localStorage.setItem('del', this.del)
           }
        },
        async loaddata(){
            let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get('https://my-json-server.typicode.com/mohamedgaballah99/resturantapi/resturant')
        this.resturant = result.data        
        }
    },
    async mounted() {
        this.loaddata()
    },
};
</script>

<style lang="scss" scoped>
th {
    text-align: center;
}

td {
    text-align: center;

    a {
        margin: 0px 15px;
    }
}

#alert {
    width: 270px !important;
    font-weight: bold;
    text-align: center !important;
    margin: 20px auto !important;
    color: #8a151b;
    span{
        cursor: pointer;
        margin-left: 10px;
    }
    animation: up 2s infinite;
}
@keyframes up{
    0%{
        transform: scale(0.9);
    }
    50%{
        transform: scale(1);
    }
    100%{
        transform: scale(0.9);
    }
}
</style>
