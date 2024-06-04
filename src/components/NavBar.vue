<template>
    <div class="navbar">
            <nav class="sticky" id="sticky">
                <ul>
                    <li><a href="dashboard.html">HOME</a></li>
                    <li><a href= "#about">ABOUT US</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                    <li><a href="Login.php">MY APPOINTMENT</a></li>
                    <li><a href="Login.php">LOG IN</a></li>
                    <li class="image-li"><img class="navLogo" src="../assets/images/logo-removebg.png" alt="ProCare Dental Clinic"></li>
                </ul>
            </nav>
            <nav class="bookApp">
                <a href="Login.php">BOOK AN APPOINTMENT</a>
            </nav>
        </div>
</template>

<script>
window.addEventListener('scroll', function()
{
    var stickyDiv = document.getElementById('sticky');
    var scrollPosition = window.scrollY;
    var imageLi = document.querySelector(".image-li");

    if(scrollPosition > 0)
    {
        stickyDiv.classList.remove('transparent');
        stickyDiv.classList.add('change-color');
        imageLi.style.display = 'list-item';
    }
    else
    {
        stickyDiv.classList.remove('change-color');
        stickyDiv.classList.add('transparent');
        imageLi.style.display = 'none';
    }
})
</script>

<style scoped>
/*Navigation bar*/
.navbar{
    width:100%;
    height: 80vh;
    background-image: url(../assets/images/dashboard_main.png);
    background-size: cover;
    background-position: center;
}

.sticky
{
    position: -webkit-sticky;
    position: fixed;
    top: 0;
    height: auto;
    transition: background-color 0.5s ease;
    align-items: center;
    z-index: +1;
}

.transparent
{
    background-color: transparent;
}

.change-color
{
    background-color: rgb(111, 146, 177);
    box-shadow: 0px 3px 4px;
}

nav
{
    width: 100%;
    height: 50px;
    background-color: transparent;
    line-height: 50px;
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
    display: none;
    position: fixed;
    top: 5%;
    left: 50px;
    transform: translateY(-50%);
    width: 260px;
    height: 80px;
    float: left;
}

.image-li
{
    display: none;
}

.image-li .navLogo
{
    display: inline-block;
}

.bookApp
{
    display: block;
    width: auto;
    padding: 5px 40px 5px 40px;
    border-radius: 5px;
    box-shadow: 0px 3px 5px;
    margin-left: 65px;
    background-color: #fff;
    position: absolute;
    top: 65vh;
}

nav a{
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    color: rgba(13, 19, 68, 0.827);
}

a button
{
    font-weight: bold;
    font-size: 22px;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 60px;
    padding: 5px 30px 5px 30px;
    border-radius: 5px;
    box-shadow: 2px 5px 10px #888;
    margin: auto;
    margin-top: 80px;
    background-color: rgba(13, 19, 68, 0.915);
}

a
{
    text-decoration: none;
}

</style>