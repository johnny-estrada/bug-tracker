const express = require("express");
const connectDB = require('./config/db')
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
