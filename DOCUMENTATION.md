# API Documentation

Welcome to the documentation for the CRUD_REST API. This document provides information on how to use the API, including its endpoints, request/response formats, and examples.

## Table of Contents

- [API Documentation](#api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
  - [Endpoints](#endpoints)
    - [Create a Person](#create-a-person)
      - [Example Request](#example-request)

## Introduction

CRUD_REST is a RESTful API for managing people. It allows you to perform CRUD (Create, Read, Update, Delete) operations on person records in a MongoDB database.

## Getting Started

To get started with the API, make sure you have the following prerequisites:

- Node.js installed on your machine
- MongoDB server running (configured in `.env` as `mongoURI`)
- Clone this repository and run `npm install` to install dependencies.

## Endpoints

### Create a Person

- **URL:** `/people`
- **Method:** `POST`
- **Request Body:**
  - `name` (string, required): The name of the person (between 3 and 50 characters).
  - `age` (number, required): The age of the person (between 18 and 100).

#### Example Request

```
POST /people

{
  "name": "John Doe",
  "age": 25
}
Example Response (201 Created)

{
  "message": "Person created successfully",
  "person": {
    "_id": "12345",
    "name": "John Doe",
    "age": 25
  }
}
Get All People

URL: /people
Method: GET
Example Response (200 OK)

[
  {
    "_id": "12345",
    "name": "John Doe",
    "age": 25
  },
  {
    "_id": "67890",
    "name": "Jane Smith",
    "age": 30
  }
]

Get Person by ID

URL: /people/:id
Method: GET
Example Response (200 OK)

{
  "_id": "12345",
  "name": "John Doe",
  "age": 25
}

Update a Person

URL: /people/:id
Method: PUT
Request Body:
name (string, required): The updated name of the person.
age (number, required): The updated age of the person.
Example Request

PUT /people/12345
{
  "name": "Updated Name",
  "age": 30
}
Example Response (200 OK)

{
  "message": "Person updated"
}

Delete a Person

URL: /people/:id
Method: DELETE
Example Response (200 OK)


{
  "message": "Person deleted"
}

Examples
You can find example code for using the API in the test.js file. Follow the examples to perform CRUD operations on person records.

Error Handling
If a request fails validation, you will receive a 400 Bad Request response with an error message.
If a requested person is not found, you will receive a 404 Not Found response with an error message.
For server errors or other issues, you will receive a 500 Internal Server Error response with an error message.
Feel free to reach out if you have any questions or encounter any issues while using the API.

Happy coding!


