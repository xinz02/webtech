<template>
    <nav-bar></nav-bar>
    <div class="container">
      <h1>Patient Info</h1>
  
      <div class="pInfo">
        <img :src="patient.gender === 'F' ? '../assets/images/women_avatar.PNG' : '../assets/images/man_avatar.PNG'" alt="Avatar" />
        <div class="info">
          <h3><u>Patient Info</u></h3>
          <table>
            <tr>
              <th align="left">Name:</th>
              <td align="left">{{ patient.name }}</td>
            </tr>
            <tr>
              <th align="left">Age:</th>
              <td align="left">{{ patient.age }}</td>
            </tr>
            <tr>
              <th align="left">Gender:</th>
              <td align="left">{{ genders[patient.gender] }}</td>
            </tr>
            <tr>
              <th align="left">Email:</th>
              <td align="left">{{ patient.email }}</td>
            </tr>
            <tr>
              <th align="left">Contact Number:</th>
              <td align="left">{{ patient.phone }}</td>
            </tr>
          </table>
        </div>
      </div>
  
      <div class="appointmentInfo">
        <table border="1" cellpadding="5">
          <tr>
            <th>No.</th>
            <th>Date</th>
            <th>Time</th>
            <th>Category</th>
            <th>Doctor</th>
            <th>Comments</th>
          </tr>
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
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  .title {
    padding-top: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .pInfo {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .pInfo img {
    width: 150px;
    height: auto;
    margin-right: 20px;
  }
  
  .info th {
    text-align: left;
    width: 150px;
    padding-right: 10px;
  }
  
  .addApp-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .addApp {
    width: 15%;
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
  
  .addApp:hover {
    text-decoration: underline;
    color: #215f83;
  }
  
  body {
    background-image: url(../assets/images/myAppBg.jpg);
  }
  
  table {
    justify-content: center;
    margin: auto;
    border-collapse: collapse;
  }
  
  .info table {
    border: none;
  }
  
  .appointmentList table,
  th,
  td {
    padding: 10px;
  }
  
  .appointmentList th,
  .appointmentList td {
    border: solid 2px black;
  }
  
  .appointmentList {
    padding-top: 30px;
  }
  </style>