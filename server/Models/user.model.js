const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    // _id:{type:Schema.Types.ObjectId,auto:true},
    name: String,
    contact: String,
    address: String
});

const user=mongoose.model('user',userSchema);

module.exports=user;