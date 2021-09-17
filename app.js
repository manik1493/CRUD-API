const express = require("express");
const app = express();
const mongoose = require("./Database/mongoose");
app.listen(3000, function () {
  console.log("Server Started on Port 3000 TEST");
});
