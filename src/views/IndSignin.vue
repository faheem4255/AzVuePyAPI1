<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="number1" :rules="rules" label="Number-1"></v-text-field>
      <v-text-field v-model="number2" :rules="rules" label="Number-2"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>

  <!-- Display the sum in a div -->
  <div v-if="sum !== null" class="mt-4">
    The sum of {{ number1 }} and {{ number2 }} is {{ sum }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const number1 = ref('');
const number2 = ref('');
const sum = ref(null); // Initialize sum as null
const rules = ref([]);

const submitForm = () => {
  // Convert the values to numbers
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    // Make an API request to calculate the sum
    axios.get(`http://localhost/sum?num1=${num1}&num2=${num2}`)
      .then(response => {
        console.log(response.data);
        // Access the "sum" property from the response object
        sum.value = response.data.sum; // Set the sum value
      })
      .catch(error => {
        console.error(error);
        // Handle errors, e.g., display an error message
        alert('Error occurred while fetching data from the API');
      });
  } else {
    // Handle invalid input, e.g., display an error message
    alert('Please enter valid numbers for Number-1 and Number-2');
  }
};
</script>
