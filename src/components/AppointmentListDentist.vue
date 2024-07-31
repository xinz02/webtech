<template>
  <div>
    <nav-bar-logged></nav-bar-logged>
    <div class="container-fluid p-0 d-flex">
      <div class="pInfo col-3">
        <h4 class="fw-bold text-start mt-2 mb-3">Dentist Information</h4>
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
              <td class="align-center" colspan="5">---No appointment yet---</td>
            </tr>
            <tr v-for="(appointment, index) in appointments" :key="appointment.appointmentID">
              <td class="align-middle">{{ index + 1 }}</td>
              <td class="align-middle">{{ appointment.appointmentDate }}</td>
              <td class="align-middle">{{ appointment.appointmentTime }}</td>
              <td class="align-middle">{{ appointment.appointment_category }}</td>
              <td class="align-middle">
                <button @click="viewPatientInfo(appointment.userID)" class="me-5 viewInfo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-info-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </button>
                <button @click="showCommentModal(appointment)" class="comment">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="darkblue" class="bi bi-chat-square-text" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--comment modal-->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <h4 class="fw-bold mb-4">Comment</h4>
        <textarea v-model="currentComment.descriptions" rows="4" cols="50"></textarea>
        <div class="modal-buttons mt-3">
          <button @click="saveComment" class="save">Save</button>
          <button @click="closeModal" class="cancel">Cancel</button>
        </div>
      </div>
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
      currentAppointment: null,
      currentComment: {
        appointmentID: null,
        descriptions: ''
      },
      showModal: false
    };
  },
  created() {
    this.fetchDentistData();
  },
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
        console.log(data);
        
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
    async showCommentModal(appointment) {
      this.currentAppointment = appointment;
      this.currentComment.appointmentID = appointment.appointmentID;

      try {
        const response = await axios.get(`http://localhost:8080/appointment/${appointment.appointmentID}/comments`);
        if (response.data && response.data.descriptions !== undefined) {
          this.currentComment.descriptions = response.data.descriptions;
        } else {
          this.currentComment.descriptions = '';
        }
      } catch (error) {
        console.error('Error fetching comment data:', error);
      }

      this.showModal = true;
    },
    async saveComment() {
      try {
        await axios.post(`http://localhost:8080/appointment/${this.currentComment.appointmentID}/comments`, {
          description: this.currentComment.descriptions
        });
        alert('Comment saved successfully')
        this.showModal = false;
      } catch (error) {
        alert('Comment cannot be empty')
        console.error('Error saving comment:', error);
      }
    },
    closeModal() {
      this.showModal = false;
    },
    viewPatientInfo(userID) {
      this.$router.push(`/patient/${userID}`);
    }
  },
};
</script>


<style scoped>
body {
  margin: 0;
  width: 100%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-image: url(../assets/images/myAppBg.jpg);
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

.addApp:hover {
  background-color: #215f83;
}

button {
  border: none;
  background: none;
}

button.viewInfo svg:hover {
  cursor: pointer;
}

button.comment svg:hover {
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 1000;
}

.modal {
  background-color: #fffffffc;
  padding: 20px;
  position: relative;
  margin: auto;
  width: auto;
  height: auto;
  flex-direction: column;;
  justify-content: center;
  border-radius: 5px;
  z-index: 1001;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  color: #000;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.modal-buttons button {
  padding: 5px 10px;
  cursor: pointer;
}

.modal-buttons button.save:hover {
  background-color: #58c672;
  color: #fff;
}

.modal-buttons button.cancel:hover {
  background-color: #c13f3f;
  color: #fff;
}
</style>
