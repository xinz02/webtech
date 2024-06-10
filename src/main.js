import { createApp } from 'vue'
import App from './App.vue'
import UserDashboard from './components/UserDashboard.vue'
import UserLogin from './components/UserLogin.vue'
import ViewPatientInfo from './components/ViewPatientInfo.vue'
import AppointmentListDentist from './components/AppointmentListDentist.vue'
import AppointmentListPatient from './components/AppointmentListPatient.vue'
import NavBar from './components/NavBar.vue'
import AddAppoint_User from './components/AddAppoint_User.vue'
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './components/SignUp.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import NavBarLoggedIn from './components/NavBar-LoggedIn.vue'


// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: UserDashboard },
    
      { path: '/login', component: UserLogin },

      { path: '/signup', component: SignUp },

      { path: '/addAppointment', component: AddAppoint_User },

      { path: '/patientInfo', component: ViewPatientInfo },

      { path: '/apptListPatient', component: AppointmentListPatient },

      { path: '/apptListDentist', component: AppointmentListDentist}
    
    ]
  });


const app = createApp(App).use(bootstrap);
app.component('nav-bar', NavBar);
app.component('nav-bar-logged', NavBarLoggedIn);
app.component('UserDashboard', UserDashboard);
app.component('UserLogin', UserLogin);
app.component('SignUp', SignUp);
app.use(router)
app.mount('#app')
