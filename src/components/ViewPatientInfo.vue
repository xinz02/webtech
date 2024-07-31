<template>
  <div>
    <nav-bar-logged></nav-bar-logged>
    <div class="container-fluid p-0 d-flex">
      <div class="pInfo col-3">
        <h4 class="fw-bold text-start mt-2 mb-3">Patient Information</h4>
        <hr>
        <div class="my-5 text-center">
          <img v-if="patient.gender === 'F'" src="../assets/images/women_avatar.png">
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
        <h4 class="fw-bold text-center mb-0 mt-2">Appointments</h4>
        <hr>
        <table class="table table-bordered mt-4">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Time</th>
              <th>Category</th>
              <th>Doctor</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="appointments.length === 0">
              <td align="center" colspan="6">---No appointment yet---</td>
            </tr>
            <tr v-for="(appointment, index) in appointments" :key="appointment.appointmentID">
              <td>{{ index + 1 }}</td>
              <td>{{ appointment.appointmentDate }}</td>
              <td>{{ appointment.appointmentTime }}</td>
              <td>{{ appointment.appointment_category }}</td>
              <td>{{ dentists[appointment.dentistID] }}</td>
              <td class="align-middle">
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

      <button class="addApp me-3 mb-2" @click="returnToAppList">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- comment modal -->
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h4 class="fw-bold mb-4">Comment</h4>
      <textarea v-model="currentComment.descriptions" rows="4" cols="50" :disabled="!isEditable"></textarea>
      <div class="modal-buttons mt-3" v-if="isEditable">
        <button @click="saveComment" class="save">Save</button>
        <button @click="closeModal" class="cancel">Cancel</button>
      </div>
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
      },
      currentAppointment: null,
      currentComment: {
        appointmentID: null,
        descriptions: ''
      },
      showModal: false,
      currentDentistID: null
    };
  },
  created() {
    this.fetchPatientData();
    this.fetchCurrentDentistID(); // Fetch current dentist ID when component is created
  },
  computed: {
    isEditable() {
      return this.currentDentistID == this.currentAppointment?.dentistID;
    }
  },
  methods: {
    async fetchPatientData() {
      const userId = this.$route.params.userID; // Access userID from route params
      if (!userId) {
        console.error('User ID not found in route parameters.');
        return;
      }

      try {
        // Fetch patient info and appointments
        const { data } = await axios.get(`http://localhost:8080/user/${userId}/appointments`);
        console.log(data);
    
        if (data.user) {
          this.patient = data.user;
        }
        if (data.appointments) {
          this.appointments = data.appointments;
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }   
    },
    async fetchCurrentDentistID() {
      try {
        const dentistID = localStorage.getItem('userID');
        if (dentistID) {
          this.currentDentistID = dentistID;
          console.log(`Current Dentist ID: ${this.currentDentistID}`);
        } else {
          console.warn('No Dentist ID found in localStorage.');
        }
      } catch (error) {
        console.error('Error fetching current dentist ID:', error);
      }
    },
    async showCommentModal(appointment) {
      this.currentAppointment = appointment;
      this.currentComment.appointmentID = appointment.appointmentID;
      
      await this.$nextTick();

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
      const commentData = {
        appointmentID: this.currentComment.appointmentID,
        description: this.currentComment.descriptions
      };

      try {
        if (this.currentComment.descriptions.trim()) {
          await axios.post(`http://localhost:8080/appointment/${this.currentComment.appointmentID}/comments`, commentData);
          alert('Comment saved successfully.');
          this.closeModal();
        } else {
          alert("Comment cannot be empty.");
        }
      } catch (error) {
        console.error('Error saving comment:', error);
      }
    },
    closeModal() {
      this.showModal = false;
    },
    returnToAppList() {
      this.$router.push('/dentist/appointments');
    }
  }
};
</script>

<style scoped>
body {
  height: 100vh;
  margin: 0;
  width: 100%;
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

.appointmentInfo {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.pInfo img {
  width: 120px;
  height: auto;
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

button.comment svg:hover{
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
