const mongoose=require("mongoose");

const keywordSchema = new mongoose.Schema({
    keyword :{
        type :String,
        required:true,
    },
    searchVolume:{
        type:Number,
        default:0,
    },
    month:{
        type:String,
    },
    year:{
       type:Number,
      
    }
    
  });
  
  module.exports=mongoose.model('Keyword', keywordSchema);
 