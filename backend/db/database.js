const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb is connected with server ${data.connection.host}`);
    });
};

module.exports = connectDatabase;