import { createApp } from 'vue'
import App from './App.vue'
import UserDashboard from './components/UserDashboard.vue'
import UserLogin from './components/UserLogin.vue'
//import ViewPatientInfo from './components/ViewPatientInfo.vue'
// import AppointmentListDentist from './components/AppointmentListDentist.vue'
// import AppointmentListPatient from './components/AppointmentListPatient.vue'
import NavBar from './components/NavBar.vue'
// import AddAppoint_User from './components/AddAppoint_User.vue'
import { createRouter, createWebHistory } from 'vue-router';


// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: UserDashboard },
    
      { path: '/login', component: UserLogin },
    
    ]
  });


const app = createApp(App);
app.component('nav-bar', NavBar);
app.component('UserDashboard', UserDashboard);
app.component('UserLogin', UserLogin);
app.use(router)
app.mount('#app')
