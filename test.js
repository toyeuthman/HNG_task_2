const axios = require('axios');

const baseUrl = 'http://localhost:3000'; // Update with your server URL

async function testCRUDOperations() {
  try {
    // Create a new person
    const createResponse = await axios.post(`${baseUrl}/people`, {
            "name": "Jane Smith",
            "username": "dancingjane",
            "age": 30
    });


    console.log('Create Response:', createResponse.data);

    // Fetch details of a person by ID
    const personId = createResponse.data.person._id;
    const readResponse = await axios.get(`${baseUrl}/people/${personId}`);
    console.log('Read Response:', readResponse.data);

    // Modify the details of an existing person
    const updatedPerson = { name: 'Updated Name', age: 36 }; // Modify fields as needed
    const updateResponse = await axios.put(`${baseUrl}/people/${personId}`, updatedPerson);
    console.log('Update Response:', updateResponse.data);

    // Remove a person by ID
    const deleteResponse = await axios.delete(`${baseUrl}/people/${personId}`);
    console.log('Delete Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testCRUDOperations();
