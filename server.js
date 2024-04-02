const express = require("express");
const app = express();
const personRoutes = require("./routes/personRoutes");
const db = require("./db"); // database connection

// database imports
const MenuItem = require("./models/menuItem");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hotels");
});

// person route
app.use("/person", personRoutes);

// create menu details
app.post("/menu", async (req, res) => {
  try {
    const data = req.body; // req.body contains the person data.

    const newMenu = new MenuItem(data);

    const response = await newMenu.save();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// get menu details
app.get("/menu", async (req, res) => {
  try {
    const menuData = await MenuItem.find();
    console.log(menuData);
    res.status(200).json(menuData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(5000, () => {
  console.log("server is running on port 3000");
});
