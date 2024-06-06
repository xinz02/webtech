<!-- <template>
    <nav-bar></nav-bar>
    <div class="container">
      <div class="pInfo">
        <img :src="avatarSrc" alt="Avatar" />
        <div class="info">
          <table>
            <tr>
              <th>Name</th>
              <td>{{ patient.name }}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{{ patient.age }}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{{ genders[patient.gender] }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ patient.email }}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{{ patient.phone }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="appointmentList">
        <table>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Category</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
          <tr v-for="appointment in appointments" :key="appointment.id">
            <td>{{ appointment.id }}</td>
            <td>{{ appointment.date }}</td>
            <td>{{ appointment.time }}</td>
            <td>{{ appointment.category }}</td>
            <td>{{ appointment.doctor }}</td>
            <td>
              <button @click="deleteAppointment(appointment.id)">Cancel</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="addApp-container">
        <button class="addApp" @click="addAppointment">Add Appointment</button>
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
          doctor: 'Dr. Smith'
        },
        {
          id: 2,
          date: '2024-06-15',
          time: '02:00 PM',
          category: 'Cleaning',
          doctor: 'Dr. Doe'
        }
      ]
    };
  },    computed: {
      avatarSrc() {
        return this.patient.gender === 'F' ? '../assets/images/women_avatar.PNG' : '../assets/images/man_avatar.PNG';
      }
    },
  methods: {
    addAppointment() {
      // Logic to add an appointment
      console.log("Adding appointment...");
    },
    deleteAppointment(id) {
      // Logic to delete an appointment
      console.log("Deleting appointment with ID:", id);
      this.appointments = this.appointments.filter(app => app.id !== id);
    }
  }
};
</script>

<style>
        * {
            margin: 0;
            padding: 0;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }

        .sticky {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            height: 75px;
            align-items: center;
            background-color: rgb(111, 146, 177);
        }

        nav {
            width: 100%;
            height: 50px;
            background-color: transparent;
            line-height: 50px;
        }

        nav ul {
            float: right;
            margin-right: 30px;
        }

        nav ul li {
            list-style-type: none;
            display: inline-block;
            transition: 0.7s all;
            margin-top: 10px;
            align-items: center;
        }

        nav ul li:hover {
            background-color: rgba(13, 19, 68, 0.827);
        }

        nav ul li a:hover {
            color: white;
        }

        nav ul li a {
            text-decoration: none;
            color: rgba(13, 19, 68, 0.827);
            padding: 20px;
            font-size: 18px;
            font-weight: normal;
        }

        .navLogo {
            position: fixed;
            top: 1%;
            left: 50px;
            width: 260px;
            height: 80px;
            float: left;
        }

        .image-li .navLogo {
            display: inline-block;
        }

        .bookApp {
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

        nav a {
            font-weight: bold;
            font-size: 20px;
            text-decoration: none;
            color: rgba(13, 19, 68, 0.827);
        }

        a button {
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

        a {
            text-decoration: none;
        }

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
      background-color: rgba(255,255,255,.5);
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
    width: 200px;
    background-color: #627ea8;
    color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin: 0 auto;
    display: inline-block
   }

   .addApp:hover {
        text-decoration: underline;
        color: #215f83;
   }

   body{
        background-image: url(../assets/images/myAppBg.jpg);
        
        
   }


   table{
      justify-content: center;
      margin: auto;
      border-collapse: collapse;
      
      
   }

   .info table{
    border:none;
   }

   

   .appointmentList table,th,td{
    padding: 10px;
    
   }

   .appointmentList th,.appointmentList td{
    border: solid 2px black;
   }

   .appointmentList{
    padding-top: 30px;
   }


    </style> -->

    <template>
      <nav-bar></nav-bar>
      <div class="container">
        <div class="pInfo">
          <!-- <img :src="avatarSrc" alt="Avatar" /> -->
          <img v-if="patient.gender == 'F'" src="../assets/images/women_avatar.png">
          <!-- <img src="../assets/images/man_avatar.PNG"> -->
          <img v-else src="../assets/images/man_avatar.png">
          <div class="info">
            <table>
              <tr>
                <th>Name</th>
                <td>{{ patient.name }}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{{ patient.age }}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{{ genders[patient.gender] }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{{ patient.email }}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{{ patient.phone }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="appointmentList">
          <table>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Category</th>
              <th>Doctor</th>
              <th>Actions</th>
            </tr>
            <tr v-for="appointment in appointments" :key="appointment.id">
              <td>{{ appointment.id }}</td>
              <td>{{ appointment.date }}</td>
              <td>{{ appointment.time }}</td>
              <td>{{ appointment.category }}</td>
              <td>{{ appointment.doctor }}</td>
              <td>
                <button @click="deleteAppointment(appointment.id)">Cancel</button>
              </td>
            </tr>
          </table>
        </div>
        <div class="addApp-container">
          <button class="addApp" @click="addAppointment">Add Appointment</button>
          <!-- <img src="../assets/images/man_avatar.PNG"> -->
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
            doctor: 'Dr. Smith'
          },
          {
            id: 2,
            date: '2024-06-15',
            time: '02:00 PM',
            category: 'Cleaning',
            doctor: 'Dr. Doe'
          }
        ]
      };
    },    computed: {
        // avatarSrc() {
        //   return this.patient.gender === 'F' ? '../assets/images/man_avatar.PNG' : '../assets/images/man_avatar.PNG';
          
        // }
      },
    methods: {
      addAppointment() {
        // Logic to add an appointment
        console.log("Adding appointment...");
      },
      deleteAppointment(id) {
        // Logic to delete an appointment
        console.log("Deleting appointment with ID:", id);
        this.appointments = this.appointments.filter(app => app.id !== id);
      }
    }
  };
  </script>
  
  <style>
          * {
              margin: 0;
              padding: 0;
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
  
          .sticky {
              position: -webkit-sticky;
              position: sticky;
              top: 0;
              height: 75px;
              align-items: center;
              background-color: rgb(111, 146, 177);
          }
  
          nav {
              width: 100%;
              height: 50px;
              background-color: transparent;
              line-height: 50px;
          }
  
          nav ul {
              float: right;
              margin-right: 30px;
          }
  
          nav ul li {
              list-style-type: none;
              display: inline-block;
              transition: 0.7s all;
              margin-top: 10px;
              align-items: center;
          }
  
          nav ul li:hover {
              background-color: rgba(13, 19, 68, 0.827);
          }
  
          nav ul li a:hover {
              color: white;
          }
  
          nav ul li a {
              text-decoration: none;
              color: rgba(13, 19, 68, 0.827);
              padding: 20px;
              font-size: 18px;
              font-weight: normal;
          }
  
          .navLogo {
              position: fixed;
              top: 1%;
              left: 50px;
              width: 260px;
              height: 80px;
              float: left;
          }
  
          .image-li .navLogo {
              display: inline-block;
          }
  
          .bookApp {
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
  
          nav a {
              font-weight: bold;
              font-size: 20px;
              text-decoration: none;
              color: rgba(13, 19, 68, 0.827);
          }
  
          a button {
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
  
          a {
              text-decoration: none;
          }
  
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
        background-color: rgba(255,255,255,.5);
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
      width: 200px;
      background-color: #627ea8;
      color: #ffffff;
      border: none;
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 4px;
      margin: 0 auto;
      display: inline-block
     }
  
     .addApp:hover {
          text-decoration: underline;
          color: #215f83;
     }
  
     body{
          background-image: url(../assets/images/myAppBg.jpg);
          
          
     }
  
  
     table{
        justify-content: center;
        margin: auto;
        border-collapse: collapse;
        
        
     }
  
     .info table{
      border:none;
     }
  
     
  
     .appointmentList table,th,td{
      padding: 10px;
      
     }
  
     .appointmentList th,.appointmentList td{
      border: solid 2px black;
     }
  
     .appointmentList{
      padding-top: 30px;
     }
  
  
      </style>