const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/apiRouter");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://mehkadiri:azerty@library.axc9gzm.mongodb.net/?retryWrites=true&w=majority"
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running : http://localhost:${PORT}/`);
});
