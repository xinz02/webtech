import { createApp } from 'vue'
// import App from './App.vue'
//import UserDashboard from './components/UserDashboard.vue'
//import ViewPatientInfo from './components/ViewPatientInfo.vue'
//import AppointmentListDentist from './components/AppointmentListDentist.vue'
import AppointmentListPatient from './components/AppointmentListPatient.vue'
import NavBar from './components/NavBar.vue'

const app = createApp(AppointmentListPatient);
app.component('nav-bar', NavBar);
// app.component('my-content', myContent);
// app.component('my-contact-list', myContactList);
// app.component('my-footer', myFooter);
// app.component('my-card', myCard);
// app.component('add-contact-form', myContactAddForm);
app.mount('#app')
