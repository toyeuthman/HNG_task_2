const axios = require('axios');

const baseUrl = 'http://localhost:3000/api'; // Update with your server URL

async function testCRUDOperations() {
  try {
    // Create a new person
    const createResponse = await axios.post(`${baseUrl}`, {
        "name": "Johndoe",
        "username": "jonhndoes",
        "age": 30
      });
    console.log('Create Response:', createResponse.data);

    // Fetch details of a person by name
    const personName = createResponse.data.person.name; // Get the name of the person
    const readResponse = await axios.get(`${baseUrl}/${personName}`);
    console.log('Read Response:', readResponse.data);

    // Modify the details of an existing person
    const updatedPerson = { username: 'updatedusername', age: 36 }; // Modify fields as needed
    const updateResponse = await axios.put(`${baseUrl}/${personName}`, updatedPerson);
    console.log('Update Response:', updateResponse.data);

    // Remove a person by name
    const deleteResponse = await axios.delete(`${baseUrl}/${personName}`);
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
