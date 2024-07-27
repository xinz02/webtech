<template>
    <body>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <form @submit.prevent="bookAppointment">
        <div class="d-flex align-items-center justify-content-center vh-100">
          <div class="booking-container">
            <h1 class="my-5 fw-bold">BOOK APPOINTMENT</h1>
  
            <!-- Dentist Selection -->
            <div class="booking-field row mx-3">
              <div class="col-2">
                <label for="dentist">
                  <!-- Icon omitted for brevity -->
                </label>
              </div>
              <div class="col-10 p-0">
                <select v-model="selectedDentist" id="dentist" name="dentist" required class="py-2 px-3">
                  <option value="" selected disabled>Choose A Dentist</option>
                  <option v-for="dentist in dentists" :key="dentist.id" :value="dentist.id + '|' + dentist.category">
                    {{ dentist.name }} - {{ dentist.category }}
                  </option>
                </select>
              </div>
            </div>
  
            <!-- Date Selection -->
            <div class="booking-field row mx-3">
              <div class="col-2">
                <label for="date">
                  <!-- Icon omitted for brevity -->
                </label>
              </div>
              <div class="col-10 p-0">
                <input type="date" v-model="appointmentDate" id="date" name="date" required placeholder="Choose An Appointment Date" class="py-2 px-3">
              </div>
            </div>
  
            <!-- Time Selection -->
            <div class="booking-field row mx-3">
              <div class="col-2">
                <label for="time">
                  <!-- Icon omitted for brevity -->
                </label>
              </div>
              <div class="col-10 p-0">
                <select v-model="appointmentTime" id="time" name="time" required class="py-2 px-3">
                  <option value="" selected disabled>Select Appointment Time</option>
                  <option v-for="time in times" :key="time" :value="time">{{ time }}</option>
                </select>
              </div>
            </div>
  
            <!-- Submit Button -->
            <div class="booking-field mx-3 mt-2 pb-4">
              <input type="submit" value="Book Appointment">
            </div>
  
            <!-- Return to Home -->
            <div class="booking-field mx-3 p-0 mb-5">
              <p><a href="/"><strong>Return to Home</strong></a></p>
            </div>
          </div>
        </div>
      </form>
    </body>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDentist: '',
        appointmentDate: '',
        appointmentTime: '',
        errorMessage: '',
        dentists: [
          { id: 1, name: 'Dr. Kenny Chiang', category: 'General' },
          { id: 2, name: 'Dr. Roziana binti Kamil', category: 'General' },
          { id: 3, name: 'Dr. Joanne Leow', category: 'Braces and Implants' },
          { id: 4, name: 'Dr. Yang Chin Peng', category: 'Root Canal' },
          { id: 5, name: 'Dr. Kandiah', category: 'Dental X-Rays' }
        ],
        times: ['8:00AM', '10:00AM', '2:00PM', '4:00PM']
      }
    },
    methods: {
      async bookAppointment() {
        console.log('Selected Dentist:', this.selectedDentist);
        console.log('Appointment Date:', this.appointmentDate);
        console.log('Appointment Time:', this.appointmentTime);
  
        // Validation
        if (!this.selectedDentist || !this.appointmentDate || !this.appointmentTime) {
          this.errorMessage = 'All fields are required.';
          return;
        }
  
        try {
          const [dentistID, category] = this.selectedDentist.split('|');
  
          // Log payload to ensure correct data
          const payload = {
            userID: localStorage.getItem('userID'),
            dentistID,
            appointmentDate: this.appointmentDate,
            appointmentTime: this.appointmentTime,
            appointment_category: category
          };
  
          console.log('Payload:', payload);
  
          const response = await fetch('http://localhost:8080/addAppointment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
  
          const data = await response.json();
          console.log('Response:', data);
  
          if (response.ok) {
            alert('Appointment booked successfully!');
            this.$router.push('/');
          } else {
            this.errorMessage = data.error || 'Failed to book appointment. Please try again.';
          }
        } catch (error) {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred while booking the appointment.';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .error {
    color: red;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background-color: lightcoral;
    color: #000000;
    width: 80%;
    max-width: 400px;
    height: 50px;
  }
  
  .error p {
    font-size: 15px;
    padding: 7px auto;
  }
  
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    color: #f5f6f7;
    font-family: Tahoma;
    font-size: 16px;
    background-image: url('../assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  h1 {
    text-align: center;
    color: #4e8fc4;
    font-family: sans-serif;
  }
  
  .booking-container {
    max-width: auto;
    min-width: auto;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  }
  
  .booking-field {
    width: 28vw;
    max-width: auto;
    min-width: auto;
    padding-bottom: 2em;
    align-items: center;
    justify-content: center;
  }
  
  .booking-field input[type="text"],
  .booking-field input[type="date"],
  .booking-field select {
    width: 91%;
    border: 1px solid #e6e0e0;
    border-radius: 4px;
    float: inline-start;
  }
  
  .booking-field input[type="submit"] {
    width: 60%;
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
  
  .booking-field input[type="submit"]:hover {
    background-color: #215f83;
  }
  
  .booking-field p {
    text-align: center;
  }
  
  .booking-field p a {
    text-decoration: none;
    color: #89a4cc;
  }
  
  .booking-field p a:hover {
    text-decoration: underline;
    color: #215f83;
  }
  </style>
  