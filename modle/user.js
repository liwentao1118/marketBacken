let mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'用户名不能为空'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'密码不能为空']
    },
    age:{
        type:Number,
        min:[0,'年龄不能小于0岁'],
        max:[120,'年龄不能大于120岁']
    },
    role:{
        type:Number,
        default:0
    },
    created:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('user',schema)