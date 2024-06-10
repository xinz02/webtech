<template>
    <nav-bar-logged></nav-bar-logged>
    <body>
    <div class="container d-flex justify-content-center align-items-center">
        <form method="POST" action="">
            <div class="d-flex justify-content-end mt-2 me-2">
                <button type="return" value="Return" onclick="redirectToAppointmentList();">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>

            <h1 class="fw-bold text-center mt-2 mb-5">BOOK APPOINTMENT</h1>
    
            <div class="row d-flex mb-3 align-items-center">
                <div class="col-3">
                    <label for="dentist">Dentist</label>
                </div>
                <div class="col-9">
                    <select name="dentist" required>
                        <option value="" selected disabled>Choose A Dentist</option>
                        <option value="1|General">Dr. Kenny Chiang - General</option>
                        <option value="2|General">Dr. Roziana binti Kamil - General</option>
                        <option value="3|Braces and Implants">Dr. Joanne Leow - Braces and Implants</option>
                        <option value="4|Root Canal">Dr. Yang Chin Peng - Root Canal</option>
                        <option value="5|Dental X-Rays">Dr. Kandiah - Dental X-Rays</option>
                    </select>
                </div>
            </div>

            <div class="row d-flex mb-3 align-items-center">
                <div class="col-3">
                    <label for="date">Appointment Date</label>
                </div>
                <div class="col-9">
                    <input type="date" id="date" name="date" placeholder="Choose An Appointment Date" value="" required>
                </div>
            </div>

            <div class="row d-flex mb-5 align-items-center">
                <div class="col-3">
                    <label for="time">Appointment Time</label>
                </div>
                <div class="col-9">
                    <select name="time" required>
                        <option value="" selected disabled>Select Appointment Time</option>
                        <option value="8:00AM">8:00AM</option>
                        <option value="10:00AM">10:00AM</option>
                        <option value="2:00PM">2:00PM</option>
                        <option value="4:00PM">4:00PM</option>
                    </select>
                </div>
            </div>

            <div class="row mb-3 mt-4 d-flex">
                <input type="submit" value="Book Appointment">
            </div>

    <!-- <div>
        
        <input type="button" value="Return" onclick="redirectToAppointmentList();">
    </div> -->
    
        </form>
    </div>
    </body>
</template>

<script>
    // function redirectToAppointmentList() {
    //     var selectedUser = "<?php echo $selectedUser; ?>";
    //     window.location.href = "appointmentlist_user.php?userID=" + selectedUser;
    // }
</script>

<style scoped>
body{
    height: 100vh;
    color: #f5f6f7;
    font-family: Tahoma;
    font-size: 16px;
}

.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    text-align: center;
    color: #4e8fc4;
    font-family: sans-serif;  
}

form {
    width: 60%;
    background-color: rgba(255,255,255,0.9);
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
    padding: 1em;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
}

label {
    color: #4e8fc4;
    display: block;
    float: inline-start;
    padding-left: 35px;
    font-family: sans-serif;
    font-size: 16px;

}

select, input[type="date"] {
    width: 93%;
    padding: 10px;
    border: 1px solid #e6e0e0;
    border-radius: 4px;
    box-sizing: border-box;
    display: block;
    font-size: 16px;
    float: inline-start;
    margin-left: 10px;
}

input[type="submit"], input[type="button"] {
    width: 50%;
    background-color: #627ea8;
    color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
}

input[type="submit"]:hover, input[type="button"]:hover {
    background-color: #215f83;
}

input[type="submit"] {
    margin-bottom: 0.5em; 
}

button[type="return"] {
    border: none;
    background: none;
}
</style>