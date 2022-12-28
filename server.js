const express = require("express");
const app = express();
const profiles = require("./src/routes/api/profile");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const db = require("./config/keys").mongoURI;
const port = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/public")));
const corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};
app.use(cors(corsOption));
app.use("/api/profiles", profiles);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
