// models/user.js

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.types.ObjecctId,
  language: String,
  body: String
});

module.exports = mongoose.model('Code', CodeSchema);

// models/user.js

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  name: String,
  age: Number,
  country: String
});

// models/user.js

module.exports = mongoose.model('User', userSchema);

                                                           
// models/user.js

user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }


    
