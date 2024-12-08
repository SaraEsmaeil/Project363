const mongoose = require('mongoose');
const User = require('./models/usermodel'); // Mongoose User Model
const Item = require('./models/itemModel'); // Mongoose Item Model
const fs = require('fs');


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    });
    const rawData = fs.readFileSync(process.env.JSON_DB_PATH, 'utf-8');
        const data = JSON.parse(rawData);

        // Insert users
        //await User.insertMany(data.users);
        console.log('Users added to database');

        // Insert items
        await Item.insertMany(data.items);
        console.log('Items added to database');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
     process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};
module.exports = connectDB;