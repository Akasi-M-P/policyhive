const express = require("express");
const port = 5000;

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
