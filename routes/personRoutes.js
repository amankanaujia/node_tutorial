const express = require("express");
const router = express.Router();
const Person = require("../models/person");

// create person details
router.post("/", async (req, res) => {
  try {
    const data = req.body; // req.body contains the person data.

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// read person details
router.get("/", async (req, res) => {
  try {
    const personData = await Person.find();
    console.log(personData);
    res.status(200).json(personData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// read person details by workType
router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "chef" || worktype == "manager" || worktype == "waiter") {
      const response = await Person.find({ work: worktype });
      console.log("respose fetched");
      res.status(200).json(response);
    } else {
      res.status(500).json({ error: "invalid worktype." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// update person details by id
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // return the updated data
        runValidators: true, // run the mongoose validations
      }
    );
    if (!response) {
      return res.status(404).json({ error: "preson not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// delete person details by id
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "preson not found" });
    }
    console.log("data deleted");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
