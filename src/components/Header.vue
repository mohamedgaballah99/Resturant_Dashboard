<template>
<div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/"><img src="@/assets/logoramove.png" alt="logo" width="100" height="100">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-white">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/add" class="nav-link text-white">Add Resturant</router-link>
                    </li>
                </ul>
                <form>
                    <router-link to="/signup" class="nav-link text-white btn btn-danger" @click.prevent="logout()">Logout</router-link>
                </form>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        logout() {
            // localStorage.clear();
            this.$router.push({
                name: "SignUp"
            });
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    .navbar {
        padding: 0px !important;

        .nav-item {
            margin: 0px 30px !important;

            .nav-link {
                border-radius: 30px;
            }

            .nav-link:hover {
                background: #8a151b;
                border-radius: 30px;
                transition: 0.5s ease-in-out;
            }
        }

        .navbar-brand {
            padding: 0px !important;
        }
    }
}
</style>
