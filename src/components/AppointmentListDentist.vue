<template>
  <div>
    <nav-bar-logged></nav-bar-logged>
    <div class="container-fluid p-0 d-flex">
      <div class="pInfo col-3">
        <h4 class="fw-bold text-start mt-2 mb-3">Dentist Infomation</h4>
        <hr>
        <div class="my-5 text-center">
          <img v-if="dentist.gender == 'F'" src="../assets/images/women_avatar.png">
          <img v-else src="../assets/images/man_avatar.png">
        </div>

        <div class="info text-start">
          <div class="row mb-3">
            <div class="col-4 fw-bold">Name</div>
            <div class="col-8">: {{ dentist.name }}</div>
          </div>

          <div class="row mb-3">
            <div class="col-4 fw-bold">Specialization</div>
            <div class="col-8">: {{ dentist.specialization }}</div>
          </div>

          <div class="row mb-3">
            <div class="col-4 fw-bold">Phone</div>
            <div class="col-8">: {{ dentist.phone }}</div>
          </div>

          <div class="row mb-3">
            <div class="col-4 fw-bold">Email</div>
            <div class="col-8">: {{ dentist.email }}</div>
          </div>

          <div class="row mb-3">
            <div class="col-4 fw-bold">Gender</div>
            <div class="col-8">: {{ genders[dentist.gender] }}</div>
          </div>
        </div>
      </div>

      <div class="appointmentInfo col-9 d-flex justify-content-start px-5">
        <h4 class="fw-bold text-center mb-0 mt-2">My Appointments</h4>
        <hr>
        <table class="table table-bordered mt-4">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Time</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="appointments.length === 0">
              <td align="center" colspan="5">---No appointment yet---</td>
            </tr>
            <tr v-for="(appointment, index) in appointments" :key="index">
              <td class="align-middle">{{ index + 1 }}</td>
              <td class="align-middle">{{ appointment.appointmentDate }}</td>
              <td class="align-middle">{{ appointment.appointmentTime }}</td>
              <td class="align-middle">{{ appointment.appointment_category }}</td>
              <td class="align-middle">
                <a :href="'viewpatientinfo_dentist.php?userID=' + appointment.userID" target="_blank" class="me-5 viewInfo">
                  <!-- <a href="/patientInfo" target="_blank" class="me-5 viewInfo"> -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-info-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </a>
                <a :href="'add_comment.php?appointmentID=' + appointment.appointmentID" class="comment">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="darkblue" class="bi bi-chat-square-text" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button class="addApp me-3 mb-2" @click="returnToAppList">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
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
      dentist: {},
      genders: {
        M: 'Male',
        F: 'Female'
      },
      appointments: [],
     
      // dentist: {
      //   name: 'John Doe',
      //   specialization: 'Dentistry',
      //   phone: '123-456-7890',
      //   email: 'john.doe@example.com',
      //   gender: 'M'
      // },
      // genders: {
      //   M: 'Male',
      //   F: 'Female'
      // },
      // appointments: [
      //   {
      //     id: 1,
      //     date: '2024-06-01',
      //     time: '10:00 AM',
      //     category: 'Dental Checkup',
      //     userID: 123,
      //     appointmentID: 456
      //   },
      //   {
      //     id: 2,
      //     date: '2024-06-15',
      //     time: '02:00 PM',
      //     category: 'Cleaning',
      //     userID: 456,
      //     appointmentID: 789
      //   }
      // ]

    };
  },
  created() {
    this.fetchDentistData();
  },
  // methods: {
  //   async fetchUserData() {
  //     const userId = localStorage.getItem('userID'); // Get user ID from localStorage
  //     if (!userId) {
  //       console.error('User ID not found in localStorage.');
  //       return;
  //     }

  //     try {
  //       // Fetch user info and appointments
  //       const { data } = await axios.get(`http://localhost:8080/user/${userId}/appointments`);
  //       // const data = await fetch(`http://localhost:8080/user/${userId}/appointments`);
  //       console.log(data)
        
  //       if (data.user) {
  //         this.patient = data.user;
  //       }
  //       if (data.appointments) {
  //         this.appointments = data.appointments;
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   },
  //   redirectToAddPage() {
  //     this.$router.push({ path: '/addAppointment' });
  //   },
  //   confirmDeleteAppointment(id) {
  //     if (window.confirm('Are you sure you want to cancel this appointment?')) {
  //       this.deleteAppointment(id);
  //     }
  //   },
  //   deleteAppointment(id) {
  //     // Logic to delete an appointment
  //     console.log("Deleting appointment with ID:", id);
  //     this.appointments = this.appointments.filter(app => app.id !== id);
  //   }
  // }
  methods: {
    async fetchDentistData() {
      const userId = localStorage.getItem('userID'); // Get user ID from localStorage
      if (!userId) {
        console.error('User ID not found in localStorage.');
        return;
      }

      try {
        // Fetch user info and appointments
        const { data } = await axios.get(`http://localhost:8080/dentist/${userId}/appointments`);
        // const data = await fetch(`http://localhost:8080/user/${userId}/appointments`);
        console.log(data)
        
        if (data.user) {
          this.dentist = data.user;
        }
        if (data.appointments) {
          this.appointments = data.appointments;
        }
      } catch (error) {
        console.error('Error fetching dentist data:', error);
      }
    },
    returnToAppList() {
      window.location.href = "/";
    }
  }
};
</script>

<style scoped>
body {
  height: 100vh;
  margin: 0;
  width: 100%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-image: url(../assets/images/myAppBg.jpg);
}

.container-fluid {
  display: flex;
  margin-top: 75px;
  height: calc(100vh - 75px);
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

.addApp:hover {
  background-color: #215f83;
}

button {
  border: none;
  background: none;
}

a.viewInfo svg:hover {
  cursor: pointer;
}

a.comment svg:hover {
  cursor: pointer;
}
</style>
