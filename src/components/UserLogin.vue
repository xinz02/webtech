<template>
  <body>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <form @submit.prevent="login">
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="login-container">
          <h1 class="my-5 fw-bold">LOGIN</h1>
          <div class="login-field row mx-3">
            <div class="col-2">
              <label for="username">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </label>
            </div>
            <div class="col-10 p-0">
              <input type="text" v-model="username" id="username" name="username" required placeholder="Username" class="py-2 px-3">
            </div>
          </div>

          <div class="login-field row mx-3">
            <div class="col-2">
              <label for="password">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
              </svg>
              </label>
            </div>
            <div class="col-10 p-0">
              <input type="password" v-model="password" id="password" name="password" required placeholder="Password" class="py-2 px-3">
            </div>
          </div>

          <div class="login-field mx-3 mt-2 pb-4">
            <input type="submit" value="Log In">
          </div>

          <div class="login-field mx-3 p-0 mb-5">
            <p><a href="/signup"><strong>Don't have an account?</strong></a></p>
          </div>
        </div>
      </div>
    </form>
  </body>
</template>

<script>
import { jwtDecode } from 'jwt-decode';

export default {
  // name: 'UserLogin'
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      token: localStorage.getItem('token') ?? ''
    }
  },
  methods: {
    async login() {
      try{
        const response = await fetch("http://localhost:8080/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: this.username, password: this.password})
        });
        
        const data = await response.json();
        if(response.ok) {
          console.log(data.token);
          this.token = data.token;
          localStorage.setItem('token', this.token);

          const decodedToken = jwtDecode(this.token);
          const uid = decodedToken.userID;
          const uname = decodedToken.username;
          const ucategory = decodedToken.category;
          
          localStorage.setItem('userID', uid);
          localStorage.setItem('username', uname);
          localStorage.setItem('category', ucategory);
          // if(decodedToken.category == 1) {
            this.$router.push('/');
          
        } else {
          this.errorMessage = data.error ?? 'Wrong Username or Password.';
        }
      } catch (error) {
        this.errorMessage = 'Login failed. Please try again later.';
      }
    }
  }
};
</script>

<style scoped>
  .error {
    color: red;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    color: #f5f6f7;
    font-family: Tahoma;
    font-size: 16px;
    background-image: url('../assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  h1 {
    text-align: center;
    color: #4e8fc4;
    font-family: sans-serif;
  }
  
  .login-container {
    max-width: auto;
    min-width: auto;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  }
  
  .form{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  
  .login-field {
    width: 28vw;
    max-width: auto;
    min-width: auto ;
    padding-bottom: 2em;
    align-items: center;
    justify-content: center;
  }
  
  .login-field input[type="text"],
  .login-field input[type="password"] {
    width: 91%;
    border: 1px solid #e6e0e0;
    border-radius: 4px;
    float: inline-start;
  }
  
  .login-field input[type="submit"] {
    width: 60%;
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
  
  .login-field input[type="submit"]:hover {
    background-color: #215f83;
  }
  
  .login-field p {
    text-align: center;
  }
  
  .login-field p a {
    text-decoration: none;
    color: #89a4cc;
  }
  
  .login-field p a:hover {
    text-decoration: underline;
    color: #215f83;
  }
  
  .error {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      border: 1px solid black;
      background-color: lightcoral;
      color: #000000;
      width: 80%;
      max-width: 400px;
      height: 50px;
    }
  
    .error p {
      font-size: 15px;
      padding: 7px auto;
    }
  
</style>