const mongosee = require("mongoose")

const Schema = mongosee.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    avator:{
        type:String,
    },
    date:{
        type:String,
        default:Date.now()
    }
})

module.exports = User = mongosee.model('User',UserSchema)