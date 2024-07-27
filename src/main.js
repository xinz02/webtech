import { createApp } from 'vue';
import App from './App.vue';
import UserDashboard from './components/UserDashboard.vue';
import UserLogin from './components/UserLogin.vue';
import ViewPatientInfo from './components/ViewPatientInfo.vue';
import AppointmentListDentist from './components/AppointmentListDentist.vue';
import AppointmentListPatient from './components/AppointmentListPatient.vue';
import NavBar from './components/NavBar.vue';
import AddAppointUser from './components/AddAppoint_User.vue';
import SignUp from './components/SignUp.vue';
import NavBarLoggedIn from './components/NavBar-LoggedIn.vue';
import { createRouter, createWebHistory } from 'vue-router';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: UserDashboard },
        { path: '/login', component: UserLogin },
        { path: '/signup', component: SignUp },
        { path: '/addAppointment', component: AddAppointUser },
        { path: '/patientInfo', component: ViewPatientInfo },
        { path: '/apptListPatient', component: AppointmentListPatient },
        { path: '/apptListDentist', component: AppointmentListDentist }
    ]
});

const app = createApp(App);
app.component('nav-bar', NavBar);
app.component('nav-bar-logged', NavBarLoggedIn);
app.use(router);
app.use(BootstrapVue3);
app.mount('#app');
