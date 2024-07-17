<!-- <template>
    <body>
        <form action="http://localhost:8080/signup" method="post">
            <div class="d-flex align-items-center justify-content-center">
            <div class="Signup-container my-5 px-5 pt-5">
            <h1 class="fw-bold mb-5">SIGN UP</h1>

            <div class="signup-field row">
                <div class="col-2">
                    <label for="name">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-person-vcard" viewBox="0 0 16 16">
                        <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
                    </svg>
                    </label>
                </div>
                <div class="col-10 p-0">
                    <input type="text" name="name" id="name" value="" required placeholder="Name" class="py-2 px-3">
                </div>
            </div>

            <div class="signup-field row">
                <div class="col-2">
                    <label for="age">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-cake2-fill" viewBox="0 0 16 16">
                        <path d="m2.899.804.595-.792.598.79A.747.747 0 0 1 4 1.806v4.886q-.532-.09-1-.201V1.813a.747.747 0 0 1-.1-1.01ZM13 1.806v4.685a15 15 0 0 1-1 .201v-4.88a.747.747 0 0 1-.1-1.007l.595-.792.598.79A.746.746 0 0 1 13 1.806m-3 0a.746.746 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v5.17q.512-.02 1-.055zm-3 0v5.176q-.512-.018-1-.054V1.813a.747.747 0 0 1-.1-1.01l.595-.79.598.789A.747.747 0 0 1 7 1.806"/>
                        <path d="M4.5 6.988V4.226a23 23 0 0 1 1-.114V7.16c0 .131.101.24.232.25l.231.017q.498.037 1.02.055l.258.01a.25.25 0 0 0 .26-.25V4.003a29 29 0 0 1 1 0V7.24a.25.25 0 0 0 .258.25l.259-.009q.52-.018 1.019-.055l.231-.017a.25.25 0 0 0 .232-.25V4.112q.518.047 1 .114v2.762a.25.25 0 0 0 .292.246l.291-.049q.547-.091 1.033-.208l.192-.046a.25.25 0 0 0 .192-.243V4.621c.672.184 1.251.409 1.677.678.415.261.823.655.823 1.2V13.5c0 .546-.408.94-.823 1.201-.44.278-1.043.51-1.745.696-1.41.376-3.33.603-5.432.603s-4.022-.227-5.432-.603c-.702-.187-1.305-.418-1.745-.696C.408 14.44 0 14.046 0 13.5v-7c0-.546.408-.94.823-1.201.426-.269 1.005-.494 1.677-.678v2.067c0 .116.08.216.192.243l.192.046q.486.116 1.033.208l.292.05a.25.25 0 0 0 .291-.247M1 8.82v1.659a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426V8.833l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277z"/>
                    </svg>
                    </label>
                </div>
                <div class="col-10 p-0">
                    <input type="text" name="age" id="age" value="" required placeholder="Age" class="py-2 px-3">
                </div>
            </div>

            <div class="signup-field row">
                <div class="col-2">
                    <label for="username">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    </label>
                </div>
                <div class="col-10 p-0">
                <input type="text" id="username" name="username" required placeholder="Username" class="py-2 px-3">
                </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="password">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
                </svg>
                </label>
            </div>
            <div class="col-10 p-0">
              <input type="password" id="password" name="password" required placeholder="Password" class="py-2 px-3">
            </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="confirmpassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </label>
            </div>
            <div class="col-10 p-0">
              <input type="password" id="confirmpassword" name="confirmpassword" required placeholder="Confirm Password" class="py-2 px-3">
            </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                    </svg>
                </label>
            </div>
            <div class="col-10 p-0">
              <input type="text" id="email" name="email" required placeholder="Email" class="py-2 px-3">
            </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="phone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                </label>
            </div>
            <div class="col-10 p-0">
              <input type="text" id="phone" name="phone" required placeholder="Phone Number" class="py-2 px-3">
            </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="gender">
                    <img src="https://icons.iconarchive.com/icons/icons8/windows-8/128/Users-Gender-icon.png" width="30" height="30">
                </label>
            </div>
            <div class="col-10 p-0 d-flex">
                <div class="col-4 d-flex align-items-center">
                    <input type="radio" name="gender" id="male" value="M" class="float-start">
                    <label for="male" class="py-2 px-3" style="color: #000">Male</label>
                </div>
                <div class="col d-flex align-items-center">
                    <input type="radio" name="gender" id="female" value="M" class="float-start">
                    <label for="male" class="py-2 px-3" style="color: #000">Female</label>
                </div>
            </div>
          </div>

          <div class="signup-field d-flex align-items-center justify-content-center pb-0 mt-3">
            <input type="submit" name="submit" value="Submit" class="ms-5">
            <button type="reset" value="Reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>
            </button>
          </div>

          <div class="signup-field mt-4 mb-0 p-0">
            <p><a href="/login"><strong>Already have an account?</strong></a></p>
          </div>
        </div>
        </div>
        </form>    
    </body>
</template> -->

<template>
    <body>
        <!-- <form action="http://localhost:8080/signup" method="post"> -->
            <p v-if="message" class="message">{{ message }}</p>
            <p v-if="error" class="error">{{ error }}</p>
            <form @submit.prevent="signup">
            <div class="d-flex align-items-center justify-content-center">
            <div class="Signup-container my-5 px-5 pt-5">
            <h1 class="fw-bold mb-5">SIGN UP</h1>

            <div class="signup-field row">
                <div class="col-2">
                    <label for="name">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-person-vcard" viewBox="0 0 16 16">
                        <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
                    </svg>
                    </label>
                </div>
                <div class="col-10 p-0">
                    <input type="text" v-model="name" name="name" id="name" value="" required placeholder="Name" class="py-2 px-3">
                </div>
            </div>

            <div class="signup-field row">
                <div class="col-2">
                    <label for="age">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-cake2-fill" viewBox="0 0 16 16">
                        <path d="m2.899.804.595-.792.598.79A.747.747 0 0 1 4 1.806v4.886q-.532-.09-1-.201V1.813a.747.747 0 0 1-.1-1.01ZM13 1.806v4.685a15 15 0 0 1-1 .201v-4.88a.747.747 0 0 1-.1-1.007l.595-.792.598.79A.746.746 0 0 1 13 1.806m-3 0a.746.746 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v5.17q.512-.02 1-.055zm-3 0v5.176q-.512-.018-1-.054V1.813a.747.747 0 0 1-.1-1.01l.595-.79.598.789A.747.747 0 0 1 7 1.806"/>
                        <path d="M4.5 6.988V4.226a23 23 0 0 1 1-.114V7.16c0 .131.101.24.232.25l.231.017q.498.037 1.02.055l.258.01a.25.25 0 0 0 .26-.25V4.003a29 29 0 0 1 1 0V7.24a.25.25 0 0 0 .258.25l.259-.009q.52-.018 1.019-.055l.231-.017a.25.25 0 0 0 .232-.25V4.112q.518.047 1 .114v2.762a.25.25 0 0 0 .292.246l.291-.049q.547-.091 1.033-.208l.192-.046a.25.25 0 0 0 .192-.243V4.621c.672.184 1.251.409 1.677.678.415.261.823.655.823 1.2V13.5c0 .546-.408.94-.823 1.201-.44.278-1.043.51-1.745.696-1.41.376-3.33.603-5.432.603s-4.022-.227-5.432-.603c-.702-.187-1.305-.418-1.745-.696C.408 14.44 0 14.046 0 13.5v-7c0-.546.408-.94.823-1.201.426-.269 1.005-.494 1.677-.678v2.067c0 .116.08.216.192.243l.192.046q.486.116 1.033.208l.292.05a.25.25 0 0 0 .291-.247M1 8.82v1.659a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426V8.833l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277z"/>
                    </svg>
                    </label>
                </div>
                <div class="col-10 p-0">
                    <input type="text" v-model="age" name="age" id="age" value="" required placeholder="Age" class="py-2 px-3">
                </div>
            </div>

            <div class="signup-field row">
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

          <div class="signup-field row">
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

          <div class="signup-field row">
            <div class="col-2">
                <label for="confirmpassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </label>
            </div>
            <div class="col-10 p-0">
              <input type="password" v-model="confirmpassword" id="confirmpassword" name="confirmpassword" required placeholder="Confirm Password" class="py-2 px-3">
            </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                    </svg>
                </label>
            </div>
            <div class="col-10 p-0">
              <input type="text" v-model="email" id="email" name="email" required placeholder="Email" class="py-2 px-3">
            </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="phone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                </label>
            </div>
            <div class="col-10 p-0">
              <input type="text" v-model="phone" id="phone" name="phone" required placeholder="Phone Number" class="py-2 px-3">
            </div>
          </div>

          <div class="signup-field row">
            <div class="col-2">
                <label for="gender">
                    <img src="https://icons.iconarchive.com/icons/icons8/windows-8/128/Users-Gender-icon.png" width="30" height="30">
                </label>
            </div>
            <div class="col-10 p-0 d-flex">
                <div class="col-4 d-flex align-items-center">
                    <input type="radio" v-model="gender" name="gender" id="male" value="M" class="float-start">
                    <label for="male" class="py-2 px-3" style="color: #000">Male</label>
                </div>
                <div class="col d-flex align-items-center">
                    <input type="radio" v-model="gender" name="gender" id="female" value="M" class="float-start">
                    <label for="male" class="py-2 px-3" style="color: #000">Female</label>
                </div>
            </div>
          </div>

          <div class="signup-field d-flex align-items-center justify-content-center pb-0 mt-3">
            <input type="submit" name="submit" value="Submit" class="ms-5">
            <button type="button" value="Reset" @click="reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>
            </button>
          </div>

          <div class="signup-field mt-4 mb-0 p-0">
            <p><a href="/login"><strong>Already have an account?</strong></a></p>
          </div>
        </div>
        </div>
        </form>    
    </body>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: '',
            username: '',
            password: '',
            confirmpassword: '',
            email: '',
            phone: '',
            gender: '',
            message: '',
            error: ''
        }
    },
    methods: {
      
        async signup() {
    try {
        const response = await fetch("http://localhost:8080/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name,
                age: this.age,
                username: this.username,
                password: this.password,
                phone: this.phone,
                email: this.email,
                gender: this.gender
            })
        });

        const responseText = await response.text();
        console.log('Response status:', response.status);
        console.log('Response body:', responseText);

        // Parse response if it's not empty
        const data = responseText ? JSON.parse(responseText) : {};

        if (response.ok) {
            this.message = 'Account created successfully!';
            this.$router.push('/signup');
            this.reset();
        } else {
            this.message = '';
            this.error = data.error ?? 'An error occurred';
        }
    } catch (error) {
        console.error(error);
        this.message = '';
        this.error = 'Failed to signup. Please try again later';
    }
},
reset() {
      this.name = '';
      this.age = '';
      this.username = '';
      this.password = '';
      this.confirmpassword = '';
      this.email = '';
      this.phone = '';
      this.gender = '';
        // this.message = '';
        // this.error = '';
    }
}
}

</script>

<style scoped>
.message {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      border: 1px solid black;
      background-color: rgb(113, 223, 103);
      color: #000000;
      width: 80%;
      max-width: 400px;
      height: 35px;
    }
  
    .message p {
      font-size: 15px;
      padding: 7px auto;
    }

    .error {
    color: red;
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
      height: 35px;
    }
  
    .error p {
      font-size: 15px;
      padding: 7px auto;
    }

body {
    width: 100%;
    height: auto;
    margin: 0;
    color: #f5f6f7;
    font-family: Tahoma;
    font-size: 16px;
    background-image: url('../assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.signup-field {
    width: 35vw;;
    padding-bottom: 2em;
    align-items: center;
    justify-content: center;
    display: flex;
}


.success {
    border: solid black 1px;
    background-color: transparent;
    width: 30vw;
    margin: auto;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 0;
    color: black;
}



.Signup-container {
    max-width: auto;
    min-width: auto;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
}

.Signup-container h1 {
    text-align: center;
    color: #4e8fc4;
    font-family: sans-serif;
}

.Signup-container label {
    color: #4e8fc4;
    font-family: sans-serif;
}

.Signup-container input[type="text"],
.Signup-container input[type="password"] {
    width: 97%;
    padding: 10px;
    border: 1px solid #e6e0e0;
    border-radius: 4px;
    float: inline-start;
}

.signup-field input[type="submit"]{
    width: 48%;
    background-color: #627ea8;
    color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
}

.signup-field input[type="submit"]:hover{
    background-color: #215f83;
}

.signup-field button[type="reset"]
{
    cursor: pointer;
    border: none;
    background: none;
    margin-left: 5px;
}

.signup-field p {
    text-align: center;
}
  
.signup-field p a {
    text-decoration: none;
    color: #89a4cc;
}
  
.signup-field p a:hover {
    text-decoration: underline;
    color: #215f83;
}
</style>

