<template>
  <nav-bar-logged></nav-bar-logged>
  <div class="container-fluid p-0 d-flex">
    <div class="pInfo col-3">
      <h4 class="fw-bold text-start mt-2 mb-3">Patient Information</h4>
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
          <tr v-for="(appointment, index) in appointments" :key="appointment.id">
            <td>{{ index + 1 }}</td>
            <td>{{ appointment.date }}</td>
            <td>{{ appointment.time }}</td>
            <td>{{ appointment.category }}</td>
            <td>{{ dentists[appointment.dentistId] }}</td>
            <td>{{ appointment.comments || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patient: {
        name: 'John Doe',
        age: 30,
        gender: 'M',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
      },
      genders: {
        M: 'Male',
        F: 'Female'
      },
      appointments: [
        {
          id: 1,
          date: '2024-06-01',
          time: '10:00 AM',
          category: 'Dental Checkup',
          dentistId: 1,
          comments: 'Routine checkup'
        },
        {
          id: 2,
          date: '2024-06-15',
          time: '02:00 PM',
          category: 'Cleaning',
          dentistId: 2,
          comments: ''
        }
      ],
      dentists: {
        1: 'Dr. Smith',
        2: 'Dr. Johnson'
      }
    };
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
  margin-top: 75px;
  height: calc(100vh - 75px);
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

.appointmentInfo th,.appointmentInfo td {
  border: solid 1px #0000003f;
}
</style>
