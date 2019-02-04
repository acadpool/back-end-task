var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var Quotes=new Schema({
    author:{
        type:String
    },
    quote_type:{
        type:String
    },
    content:{
        type:String
    },
    date_created:{
        type:Date,
        default:new Date
    }
});

Quotes.index({content:'text'});

module.exports=mongoose.model('Quotes',Quotes);