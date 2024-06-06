<template>
    
<!-- <nav-bar></nav-bar> -->
<div class="navbar">
            <nav class="sticky" id="sticky">
                <ul>
                    <li><router-link to="/">HOME</router-link></li>
                    <li><a href= "#about">ABOUT US</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                    <li><router-link to="/login">MY APPOINTMENT</router-link></li>
                    <li><router-link to="/login">LOG IN</router-link></li>
                    <li class="image-li"><img class="navLogo" src="../assets/images/logo-removebg.png" alt="ProCare Dental Clinic"></li>
                </ul>
            </nav>
            <nav class="bookApp">
                <router-link to="/login">BOOK AN APPOINTMENT</router-link>
            </nav>
        </div>


        <div class="about" id="about">
            <div class="container_about">
                <img src="../assets/images/AboutUs.jpg" alt="Dentist">
                <div>
                    <h2>About Us</h2>
                    <h1>Certified Dentist <br> Committed to Excellence</h1>
                    <p>We are a team of 5 certified dentists and 4 dental assistants for each dentist
                        specialized in offering the best dental treatments in town. With adequate experience of over 10 years, 
                        we have mastered the skills of offering the best 
                        solutions with the latest technologies.<br><br></p>
                </div>
            </div>
        </div>

        <div class="services" id="services">
            <h2>Our Services</h2>
            <h1>All Your Dental Needs at One Place</h1>
            <div class="container_services">
                <div class="service">
                    <img src="../assets/images/ComesticNAesthetic.jpg" alt="Cosmestic/Aesthetic Dentistry">
                    <h3>Cosmestic/Aesthetic Dentistry</h3>
                    <p>We offer affordable tooth bleaching and alignment treatments you may need.</p>
                </div>
                <div class="service">
                    <img src="../assets/images/X-rayTeeth.jpg" alt="Dental X-Rays">
                    <h3>Dental X-Rays</h3>
                    <p>No treatment is started without an x-ray taken from our higj-end x-ray machine.</p>
                </div>
                <div class="service">
                    <img src="../assets/images/Root Canals.jpg" alt="Root Canals">
                    <h3>Root Canals</h3>
                    <p>With us you get the fastest and painless root canal treatments done quickly.</p>
                </div>
            </div>
            <div class="container_services">
                <div class="service">
                    <img src="../assets/images/teeth whitening.jpg" alt="Teeth Whitening">
                    <h3>Teeth Whitening</h3>
                    <p>Whether it is just cleaning or polishing, get a brighter smile while you walk out.</p>
                </div>
                <div class="service">
                    <img src="../assets/images/dental implants.jpg" alt="Dental Implants">
                    <h3>Dental Implants</h3>
                    <p>We help you get a new set of teeth or a single tooth that matches your smile.</p>
                </div>
                <div class="service">
                    <img src="../assets/images/braces.jpg" alt="Braces & Implants">
                    <h3>Braces & Implants</h3>
                    <p>We use and recommend Invisalign braces for better results of teeth alignment.</p>
                </div>
            </div>
            <router-link to="/login"><button>BOOK AN APPOINTMENT</button></router-link>
        </div>

        <div class="reserve">
            <div class="container_reserve">
                <div class="text_container">
                <h1>Secure Your Appointment & <br>Experience Effortless Dental Care!</h1>
                <p>Seeking exceptional dental treatments with minimal wait times? 
                    Reserve your preferred time slot, effortlessly walk in at your appointed time, 
                    and receive prioritized treatments without any additional charges.</p>
                    <router-link to="/login"><button class="btn">Reserve My Slot Now!</button></router-link>
                </div>
                <img src="../assets/images/Reserve.jpg" alt="Reserve a slot!">
            </div>
        </div>

        <div class="dentist" id="dentist">
            <h2>Why Choose Us</h2>
            <h1>We Make Dental Treatments Fun!</h1>
            <div class="container_dentist">
                <img src="../assets/images/why Choose us.jpg" alt="Why Choose Us">
                <div class="chooseUs">
                    <h3>Our ProCare Team</h3>
                    <p>
                        We take pride in offering exceptional dental care through our dedicated team of professionals. 
                        Our experienced dentists have an average of over five years' experience in the dental field, 
                        ensuring that you receive expert care tailored to your unique needs. 
                        We are passionate about educating our patients on the significance of oral hygiene and strive to foster open communication to address any concerns or questions you may have. 
                        Our team has extensive experience working with patients of all ages, including children, adolescents, and adults, as well as individuals with dental anxiety. 
                        We believe in the power of collaboration and work together seamlessly to provide the best possible treatment outcomes for our patients. 
                        Rest assured that our team remains up to date with the latest techniques and advancements in dentistry to deliver the highest level of care and ensure your well-being. 
                        Choose <strong>ProCare Dental Clinic</strong> for exceptional dental services that prioritize your comfort, health, and satisfaction.
                    </p>
                    <ul class="list">
                        <li>5+ Years of experience</li>
                        <li>High Equipped CLinic</li>
                        <li>Good quality care & service</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="contact" id="contact">
            <div class="here">
                <img src="../assets/images/logo.png">
                <h1>WE ARE HERE FOR YOU</h1>
            </div>
            <div class="container_contact">
                <div class="map">
                    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.369817514184!2d103.6187624871582!3d1.558468100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7154a58c424b%3A0x8c133d77584b5ff8!2sUniversiti%20Teknologi%20Malaysia!5e0!3m2!1sen!2smy!4v1687936537109!5m2!1sen!2smy" width="100%" height="415px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                    <a href="https://goo.gl/maps/zuJkD84ouQAnvz6x6" target="_blank"><button id="map-btn">FIND US</button></a>
                </div>
                <div class="contactinfo">
                    <h1>CONTACT US</h1>
                    <h3>ADDRESS</h3>
                    <p>Jalan Iman, 81310 Skudai, Johor</p>
                    <p>Call us today: +074345566</p>
                    <p>Email us: <a href="mailto:keewei@graduate.utm.my" target="_blank">keewei@graduate.utm.my</a></p>
                    <h3>BUSINESS HOURS</h3>
                    <p>Monday - Friday: 8.00 am to 5.00 pm</p>
                    <p>Saturday: 8.00 am to 1.00 pm</p>
                </div>
            </div>
        </div>
</template>



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



*{
    margin:0;
    padding:0;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/*About Us*/
.about
{
    margin: 150px;
}

.about img
{
    display: inline-block;
    width: 600px;
    height: 500px;
    margin-right: 30px;
    margin-top: 30px;
}

.about p
{
    font-size: 20px;
    margin-left: 50px;
}

.about h2
{
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 50px;
    font-size: 30px;
    color:rgba(0, 45, 158, 0.827);
}

.about h1
{
    font-size: 40px;
    margin-left: 50px;
    margin-bottom: 50px;
}

.container_about, .container_dentist
{
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/*Our Services*/
.services, .dentist
{
    margin: 50px 130px 130px 130px;
}

.services h2, .dentist h2
{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: rgba(0, 45, 158, 0.827);
    margin-bottom: 20px;
}

.services h1, .dentist h1
{
    text-align: center;
    font-size: 40px;
}

.container_services
{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.service
{
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 400px;
    box-shadow: 0px 3px 8px #636363a2;
    border-radius: 5px;
    background-color: #f1f1f1cf;
    margin: auto;
}

.service img
{
    width: 280px;
    height: 250px;
    margin: 30px 20px 30px 34px;
    box-shadow: 0px 6px 8px #636363a2 ;
}

.service h3
{
    font-size: 22px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgba(13, 19, 68, 0.915);
    font-weight: bold;
    margin: 0px 0px 10px 30px;
}

.service p
{
    font-size: 20px;
    color:rgb(95, 132, 171);
    margin: 0px 20px 30px 30px;
}

/*Reserve a slot*/
.reserve
{
    background-color: #77b3ef;
    margin: 150px;
}

.container_reserve
{
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.reserve img
{
    height: 500px;
    width: 600px;
}

.text_container
{
    padding: 0 90px 0 90px;
    margin: auto;
}

.text_container h1
{
    font-size: 30px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgba(13, 19, 68, 0.827);
    margin: 0 0 40px 0;
}

.text_container p, .chooseUs p
{
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: normal;
}

.list
{
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    color:rgba(13, 19, 68, 0.827);
    font-weight: bold;
}

.list li
{
    list-style-type: none;
}

.list li:before
{
    content:"";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url(../assets/images/tick.png);
    background-color: transparent;
    background-size: cover;
    margin-right: 20px;
}

/*Our ProCare Team*/
.container_dentist
{
    margin-top: 50px;
    height: auto;
}

.chooseUs
{
    padding: 0 70px 0 70px;
    margin: auto;
    height: auto;
    background-color: rgba(179, 212, 243, 0.303);
    box-shadow: 0 3px 8px #888;
}

.chooseUs h3
{
    font-size: 40px;
    font-weight: bold;
    color: rgba(13, 19, 68, 0.827);
    margin-top: 40px;
    margin-bottom: 30px;
    font-family: 'Times New Roman', Times, serif;
}

.chooseUs p
{
    font-size: 16px;
    color:rgba(13, 19, 68, 0.827);
    margin-bottom: 30px;
}

.list
{
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    color:rgba(13, 19, 68, 0.827);
    font-weight: bold;
}

.list li
{
    list-style-type: none;
}

.list li:before
{
    content:"";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url(../assets/images/tick.png);
    background-color: transparent;
    background-size: cover;
    margin-right: 20px;
}

.btn
{
    background-color: #fff;
    color: rgba(13, 19, 68, 0.915);
    border: none;
    outline: none;
    font-size: 25px;
    margin-top: 70px;
    justify-content: left;
    align-items: left;
    display: inline-block;
}

/*Contact Us*/
.contact
{
    margin-top: 100px;
}

.here
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.here img
{
    width: 400px;
    height: 180px;
    margin-right: 60px;
}

.here h1
{
    font-size: 40px;
    font-weight: 600;
    font-family:'Times New Roman', Times, serif;
    color:rgb(16, 32, 67);
}

.container_contact
{
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
}

.contactinfo
{
    width: 50%;
    height: auto;
    text-align: center;
    background-color:rgba(95, 132, 171, 0.323);
    width: 50%;
    height: 415px;
    box-shadow: 0px 3px 6px #888;
}

.contactinfo h1
{
    font-size: 45px;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-top: 50px;
    color: #040405;
}

.contactinfo h3
{
    font-size: 26px;
    font-family: 'Times New Roman', Times, serif;
    color:#140f0f;
    margin: 30px 0 15px 0;
}

.contactinfo p
{
    font-size: 20px;
    color:#170f0fb3;
}

.contactinfo p a
{
    text-decoration: underline;
    color: #170f0fb3;
}

/*Google Maps*/
.map
{
    width: 50%;
    height: auto;
    position: relative;
}

#map-btn
{
    position: absolute;
    background-color: rgb(64, 68, 71);
    color: #fff;
    padding: 10px 20px;
    border: none;
    box-shadow: 0px 5px 8px #888;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    top: 50%;
    left: 40%;
    width: auto;
    text-align: center;
    margin: 0;
}

#map-btn:hover
{
    background-color: rgba(13, 19, 68, 0.915);
    color: #fff;
}

</style>