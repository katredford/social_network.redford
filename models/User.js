const { Schema, model } = require('mongoose');
const thoughts = require('./Thought');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

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
         unique: true,
         validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
     },
     thoughts: [
         {
             type: Schema.Types.ObjectId,
             ref: 'Thought'
         }
        ],
     
    //  friends: {
    //      * Array of `_id` values referencing the `User` model (self-reference)
    //  }
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
       ]},

       {
        toJSON: {
          virtuals: true,
        },
        id: false
      

 })

 UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})
//  console.log('Schema!!!!!!', UserSchema)

 //create user model using userschema
 const User = model('User', UserSchema);

 //export user model
 module.exports = User;