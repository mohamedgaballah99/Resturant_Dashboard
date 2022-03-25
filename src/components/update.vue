<template>
<div class="update">
    <Header></Header>
    <h3 class="text-center m-3">Hello {{username}} Welcome to Update Resturant</h3>
    <div class="addform">
        <form>
            <div class="mb-3">
                <label class="form-label">Resturant Name </label>
                <input type="text" class="form-control" name="name" v-model="resturant.name">
            </div>
            <div class="mb-3">
                <label class="form-label">Resturant Contact</label>
                <input type="text" class="form-control" name="contact" v-model="resturant.contact">
            </div>
            <div class="mb-3">
                <label class="form-label">Resturant Address</label>
                <input type="text" class="form-control" name="address" v-model="resturant.address">
            </div>

            <button class="btn btn-blue" @click.prevent="update()">Update Resturant</button>
        </form>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header';
import axios from 'axios';
export default {
    name: "Update",
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
            },
            counter:0
        }
    },
    methods: {
        async update() {
            let update = await axios.put('http://localhost:3000/resturant/' + this.$route.params.id, {
                name: this.resturant.name,
                contact: this.resturant.contact,
                address: this.resturant.address
            })
            console.log(update);
            if (update.status == 200 && this.name != "" && this.contact != "" && this.address != "") {
                localStorage.setItem('add-info', JSON.stringify(update.data))
                this.$router.push({
                    name: 'home'
                })
                this.counter=1
                localStorage.setItem('counter',this.counter)
            } else {
                this.error = "Please fill all Filed...?"
            }
            console.log(this.resturant);
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get('http://localhost:3000/resturant/' + this.$route.params.id)
        this.resturant = result.data
    },
};
</script>

<style lang="scss" scoped>
.update {
    .addform {
        width: 600px;
        margin: 20px auto;
    }

    .btn-blue {
        background: #8a151b;
        color: white !important;
    }

    label {
        font-weight: bold;
    }
}
</style>
