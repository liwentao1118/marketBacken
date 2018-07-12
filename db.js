let config = require('./config');
let mongoose = require('mongoose');
mongoose.connect(config.DB)
let db = mongoose.connection;
db.on('err',(err)=>{
    console.log(err.toString())
})

db.once('open',()=>{
    console.log('数据库连接成功')
})

