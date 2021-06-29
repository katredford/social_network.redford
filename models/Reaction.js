const { Schema, Types, model, Mongoose } = require('mongoose');



 const reactionSchema = new Schema({
  
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        reactionId: {
            type:  Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        username:{
            type: String,
            required: true
        },
        

    },

    { 
        timestamps: { createdAt: 'created_at' }

    })
     //create user model using userschema
//  const Reaction = model('Reaction', reactionSchema);

 //export user model
 module.exports = reactionSchema;