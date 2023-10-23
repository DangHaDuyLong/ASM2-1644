const mongoose = require('mongoose');
const LegoSchema = mongoose.Schema(
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
const LegoModel = mongoose.model('lego', LegoSchema, 'lego');
module.exports = LegoModel;