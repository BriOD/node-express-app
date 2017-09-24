const mongoose = require('mongoose');
const { Schema } = mongoose;

// create the user schema and define its properties
const userSchema = new Schema({
  googleId: String
});

// create the model class (collection called users)
mongoose.model('users', userSchema);
