const axios = require('axios');

const baseUrl = 'http://localhost:3000/api'; // Update with your server URL

async function testCRUDOperations() {
  try {
    // Create a new person
    const createResponse = await axios.post(`${baseUrl}`, {
      name: 'Johndoe',
      username: 'johndoes',
      age: 30,
    });
    console.log('Create Response:', createResponse.data);

    // Extract the person ID from the create response
    const personId = createResponse.data.id;

    // Fetch details of a person by ID
    const readResponse = await axios.get(`${baseUrl}/${personId}`);
    console.log('Read Response:', readResponse.data);

    // Modify the details of an existing person
    const updatedPerson = { username: 'updatedusername', age: 36 }; // Modify fields as needed
    const updateResponse = await axios.put(`${baseUrl}/${personId}`, updatedPerson);
    console.log('Update Response:', updateResponse.data);

    // Remove a person by ID
    const deleteResponse = await axios.delete(`${baseUrl}/${personId}`);
    console.log('Delete Response:', deleteResponse.data);
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

testCRUDOperations();
