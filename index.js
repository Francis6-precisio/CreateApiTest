const express = require("express");
const app = express();
let port = process.env.PORT || 5500;

require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");

//mongoose.set("useFindAndModify", false);

// middleware
app.use(bodyParser.json());
app.use("/posts", postsRoutes);

app.listen(port, () => console.log(`Server started on port: ${port}`));
