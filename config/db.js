const mongoose = require('mongoose');

const mongouri = "mongodb+srv://vishwa29:pmOnIfoaIprbgADi@cluster0.9oe2t.mongodb.net/api-crud"

const connectDB = () => {
    mongoose.connect(mongouri, () => {
        console.log("mongoDB is Connected");
    })
}

module.exports = connectDB;


// const mongoose = require("mongoose");
// const mongouri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

// const connectmongo = () => {
//     mongoose.connect(mongouri, () => {
//         console.log("mongoDB is Connected");
//     })
// }
// module.exports = connectmongo;
