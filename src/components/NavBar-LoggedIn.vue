<template>
    <div class="navbar">
        <nav class="sticky" id="sticky">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href= "/#about">ABOUT US</a></li>
                <li><a href="/#services">SERVICES</a></li>
                <li><a href="/#contact">CONTACT US</a></li>
                <li v-if="category==1"><a href="/patient/appointments">MY APPOINTMENT</a></li>
                <li v-else><a href="/dentist/appointments">MY APPOINTMENT</a></li>
                <li><a href="/" @click="logout">LOG OUT</a></li>
                <li class="image-li"><img class="navLogo" src="../assets/images/logo-removebg.png" alt="ProCare Dental Clinic"></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default{
    data() {
        return {
            category: localStorage.getItem('category') ?? ''
        }
    },
    methods:{
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('userID');
            localStorage.removeItem('username');
            localStorage.removeItem('category');
        }
    }
}
</script>

<style scoped>
*{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.navbar{
    width: 100%;
}

.sticky
{
    position: -webkit-sticky;
    position: fixed;
    top: 0;
    height: 70px;
    transition: background-color 0.5s ease;
    align-items: center;
    z-index: +1;
}

nav
{
    width: 100%;
    line-height: 50px;
    background-color: rgb(111, 146, 177);
    box-shadow: 0px 3px 4px;
}

nav ul{
    float: right;
    margin-right: 30px;
}

nav ul li{
    list-style-type: none;
    display: inline-block;
    transition: 0.7s all;
    margin-top: 10px;
    align-items: center;
}

nav ul li:hover{
    background-color:rgba(13, 19, 68, 0.827);
}

nav ul li a:hover {
    color: white;
}

nav ul li a{
    text-decoration: none;
    color: rgba(13, 19, 68, 0.827);
    padding: 20px;
    font-size: 18px;
    font-weight: normal;
}

.navLogo
{
    position: fixed;
    top: 5%;
    left: 50px;
    transform: translateY(-50%);
    width: 260px;
    height: 70px;
    float: left;
}

.navLogo img
{
    width: 260px;
    height: 80px;
}

nav a{
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    color: rgba(41, 46, 61, 0.827);
}

a
{
    text-decoration: none;
}
</style>