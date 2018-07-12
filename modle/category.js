let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    name:{
        type:String ,
        unique:true,
        required:[true,'商品名不能为空']
    },
    created:{
        type:Date,
        default:Date.now()
    }
})

module.exports=schema