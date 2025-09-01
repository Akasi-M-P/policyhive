const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the PolicyHive API" });
});

const policiesRouter = require("./routes/policies");
app.use("/api/policies", policiesRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
