# CRUD_REST API with MongoDB

Welcome to the CRUD_REST Express API with MongoDB documentation. This guide will help you get started with a simple Express.js API for managing a collection of people using a MongoDB database. This API supports basic CRUD (Create, Read, Update, Delete) operations for people records.

## Getting Started

Before you begin, ensure you have the following prerequisites installed on your system:

- **Node.js**: This is the JavaScript runtime environment.
- **MongoDB**: A NoSQL database for storing person records.
- **Git**: This is a version control system (optional, but recommended for managing the codebase).

### Clone the Repository

To get started, clone this repository to your local machine. You can do this using the following command:

```shell
git clone https://github.com/your-username/express-mongodb-api.git
```

Once cloned, navigate to the project directory:

```shell
cd express-mongodb-api
```

### Install Project Dependencies

To install the required project dependencies, run:

```shell
npm install
```

### Configure Environment Variables

Create a `.env` file in the project's root directory with the following content:

```env
PORT=3000
mongoURI=mongodb://localhost/your-database-name
```

Replace `your-database-name` with the name of your MongoDB database.

### Start the Express Server

You can start the Express server with the following command:

```shell
npm start
```

Your API should now be up and running at `http://localhost:3000`.

## API Endpoints

### Create a Person

**Endpoint:** `POST /api`

**Request Body:**

```json
{
  "name": "John Doe",
  "age": 30
}
```

**Description:** Create a new person record with a name and age.

### Get All People

**Endpoint:** `GET /api`

**Description:** Retrieve a list of all people records.

### Get Person by Name

**Endpoint:** `GET /api/:name`

**Description:** Retrieve a person record by their name.

### Update Person by Name

**Endpoint:** `PUT /api/:name`

**Request Body:**

```json
{
  "name": "Updated Name",
  "age": 35
}
```

**Description:** Update a person's name and age by their name.

### Delete Person by Name

**Endpoint:** `DELETE /api/:name`

**Description:** Delete a person record by their name.

## Examples

You can find examples of how to use these API endpoints in the documentation.

## Error Handling

If a request results in an error, the API will respond with an appropriate HTTP status code and a JSON response containing an error message.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. You can find more details in the `LICENSE` file.

## Acknowledgments

This project was built using Express.js for the API and Mongoose for MongoDB integration. Thanks to the open-source community for their contributions to the development of these technologies.
