<template>
  <div>
    <nav-bar-logged></nav-bar-logged>
    <div class="container-fluid p-0 d-flex">
      <div class="pInfo col-3">
        <h4 class="fw-bold text-start mt-2 mb-3">Personal Information</h4>
        <hr>
        <div class="my-5 text-center">
          <img v-if="patient.gender == 'F'" src="../assets/images/women_avatar.png">
          <img v-else src="../assets/images/man_avatar.png">
        </div>
        <div class="info text-start">
          <div class="row mb-3">
            <div class="col-4 fw-bold">Name</div>
            <div class="col-8">: {{ patient.name }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-4 fw-bold">Age</div>
            <div class="col-8">: {{ patient.age }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-4 fw-bold">Gender</div>
            <div class="col-8">: {{ genders[patient.gender] }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-4 fw-bold">Email</div>
            <div class="col-8">: {{ patient.email }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-4 fw-bold">Hp No</div>
            <div class="col-8">: {{ patient.phone }}</div>
          </div>
        </div>
      </div>
      
      <div class="appointmentInfo col-9 d-flex justify-content-start px-5">
        <h4 class="fw-bold text-center mb-0 mt-2">My Appointments</h4>
        <hr>
        <table class="table table-bordered mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Category</th>
              <th>Doctor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(appointment,index) in appointments" :key="appointment.appointmentID">
              <td class="align-middle">{{ index + 1 }}</td>
              <td class="align-middle">{{ appointment.appointmentDate }}</td>
              <td class="align-middle">{{ appointment.appointmentTime }}</td>
              <td class="align-middle">{{ appointment.appointment_category }}</td>
              <td class="align-middle">{{ dentists[appointment.dentistID] }}</td>
              <td class="align-middle">
                <button @click="confirmDeleteAppointment(appointment.appointmentID)" id="cancel">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="addApp me-3 mb-2" @click="redirectToAddPage">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      patient: {},
      genders: {
        M: 'Male',
        F: 'Female'
      },
      appointments: [],
      dentists: {
        1: 'Dr. Kenny Chiang',
        2: 'Dr. Roziana binti Kamil',
        3: 'Dr. Joanne Leow',
        4: 'Dr. Yang Chin Peng',
        5: 'Dr. Kandiah'
      }
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const userId = localStorage.getItem('userID'); // Get user ID from localStorage
      if (!userId) {
        console.error('User ID not found in localStorage.');
        return;
      }

      try {
        // Fetch user info and appointments
        const { data } = await axios.get(`http://localhost:8080/user/${userId}/appointments`);
        console.log(data);
        
        if (data.user) {
          this.patient = data.user;
        }
        if (data.appointments) {
          this.appointments = data.appointments;
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    redirectToAddPage() {
      this.$router.push({ path: '/addAppointment' });
    },
    confirmDeleteAppointment(appointmentID) {
      if (window.confirm('Are you sure you want to cancel this appointment?')) {
        this.deleteAppointment(appointmentID);
      }
    },
    async deleteAppointment(appointmentID) {
        try {
            await axios.delete(`http://localhost:8080/appointment/${appointmentID}`);
            // Remove appointment from local state
            this.appointments = this.appointments.filter(appointment => appointment.appointmentID !== appointmentID);
        } catch (error) {
            console.error('Error deleting appointment:', error);
        }
    },
  }
};
</script>

<style scoped>
body {
  height: 100vh;
  margin: 0;
  width: 100%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.container-fluid {
  display: flex;
  margin-top: 55px;
  height: calc(100vh - 55px);
}

.pInfo {
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgb(0, 0, 0);
  padding: 20px;
}

.pInfo img {
  width: 120px;
  height: auto;
}

.appointmentInfo {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.appointmentInfo .table {
  width: 100%;
  margin: 0;
}

.appointmentInfo .table th,
.appointmentInfo .table td {
  padding: 10px;
  text-align: center;
}

.appointmentInfo th,
.appointmentInfo td {
  border: solid 1px #0000003f;
}

.addApp {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border: none;
  background-color: #627ea8;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.addApp img {
  width: 30px;
  height: 30px;
}

.addApp:hover {
  background-color: #215f83;
}

.addApp img:hover {
  transform: scale(1.1);
}

button {
  border: none;
  background: none;
}

button#cancel svg:hover {
  background-color: rgba(255, 0, 0, 0.481);
}
</style>