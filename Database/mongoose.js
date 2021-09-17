const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/TaskManager")
  .then(() => {
    console.log("Mongo DB Connected Successfully!!!");
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
module.exports = mongoose;
