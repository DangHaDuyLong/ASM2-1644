const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
   {
      name : {
         type: String,
      },
      type: {
        type: String,
      },
      image:{
        type: String,
      },
      price : {
        type : String,
      },
      description :{
        type : String,
      },
      origin : {
        type : String,
      }
    
   }
)
const CardModel = mongoose.model('card', cardSchema, 'card');

module.exports = CardModel;