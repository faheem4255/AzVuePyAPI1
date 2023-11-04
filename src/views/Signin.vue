<template>
    <div class="text-center">
      <h1>This is SIGN IN page</h1>
      <v-app>
        <v-container fluid>
          <!-- Move the "This is my App.vue" button to the top center -->
          <v-row align="center" justify="center">
            <v-btn elevation="2" rounded>
              This is my App.vue
            </v-btn>
          </v-row>
          <!-- Add some spacing between the "This is my App.vue" button and the "Sign In" button -->
          <v-row align="center" justify="center" class="mt-4">
            <v-btn elevation="2" rounded @click="signIn" v-if="!isAuthenticated">
              Sign In
            </v-btn>
            <v-btn elevation="2" rounded @click="signOut" v-if="isAuthenticated">
              Sign Out
            </v-btn>
          </v-row>
  
          <!-- Display the response data in a div -->
          <div v-if="responseData" class="mt-4">
            
            <pre>{{ responseData }}</pre>
            
          </div>
        </v-container>
      </v-app>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import msalInstance from '@/auth'; // Import the authentication configuration
 

  const isAuthenticated = ref(false);
  const responseData = ref(null); // Create a ref to store the response data
  
  const signIn = () => {
    msalInstance.loginPopup()
      .then(response => {
        console.log('Authentication successful:', response);
        isAuthenticated.value = true;
        // Store the response data in the ref
        responseData.value = JSON.stringify(response, null, 2); 
      })
      .catch(error => {
        console.error('Authentication error:', error);
      });
  };
  
  const signOut = () => {
    msalInstance.logout()
      .then(() => {
        console.log('Signed out');
        isAuthenticated.value = false;
        // Clear the response data when signing out
        responseData.value = null;
      })
      .catch(error => {
        console.error('Sign-out error:', error);
      });
  };
  </script>
  
  <style scoped>
  /* Your scoped styles go here */
  </style>
  