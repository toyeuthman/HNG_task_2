const express = require("express");
const mongoose = require("mongoose");
const Person = require('./PersonModel')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
// const ; // Update with your MongoDB URI

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
 
// CRUD routes
app.post("/people", async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json({ message: "Person created successfully",person });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/people", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/people/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const person = await Person.findById(id)
    if (!person) {
      res.status(404).json({ error: "Person not found" });
      return;
    }
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/people/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPerson = req.body;
    const person = await Person.findByIdAndUpdate(id, updatedPerson, {
      new: true,
    })
    
    if (!person) {
      res.status(404).json({ error: "Person not found" });
      return;
    }
    res.status(200).json({message: 'Person updated'});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/people/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPerson = await Person.deleteOne({ _id: id })

    if (!deletedPerson) {
      res.status(404).json({ error: "Person not found" });
      return;
    }
    res.status(200).json({ message: "Person deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


