const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


 const thoughtSchema = new Schema({
  
        thought: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username:{
            type: String,
            required: true
        },
        reactions : [reactionSchema]

    },


    { 
        timestamps: { createdAt: 'created_at' },
        toJSON: {
            virtuals: true,
        },
        id:false

    },
   
);

    thoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length
    })

     //create user model using userschema
 const Thought = model('Thought', thoughtSchema);

 //export user model
 module.exports = Thought;