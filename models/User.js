const { Schema, Model } = require('mongoose');



 const UserSchema = new Schema({
      //  `username`
    // * String
    // * Unique
    // * Required
    // * Trimmed
     userName: {
         type: String,
         unique: true,
         required: true,
         trim: true
     },
     email: {
         type: String,
         required: true,
         trim: true,
         unique: true
         //validate  Must match a valid email address (look into Mongoose's matching validation)
     },
     thoughts: {
        // * Array of `_id` values referencing the `Thought` model
     },
     friends: {
        // * Array of `_id` values referencing the `User` model (self-reference)
     }
   
 })
