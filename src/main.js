import { createApp } from 'vue'
// import App from './App.vue'
import UserDashboard from './components/UserDashboard.vue'
import NavBar from './components/NavBar.vue'

const app = createApp(UserDashboard);
app.component('nav-bar', NavBar);
// app.component('my-content', myContent);
// app.component('my-contact-list', myContactList);
// app.component('my-footer', myFooter);
// app.component('my-card', myCard);
// app.component('add-contact-form', myContactAddForm);
app.mount('#app')
