require('./db')
require('express-async-errors')
let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let config = require('./config');

let app = express();
app.use(morgan('combined'))//注册日志中间件

app.use(bodyParser.json())

app.use(require('./middleware/res_md'))
app.use(require('./middleware/token_md'))
app.use(require('./middleware/permission'))

app.use('/user',require('./router/user'))
app.use('/category',require('./router/category'))
app.use('/product',require('./router/product'))
app.use('/order',require('./router/order'))

app.use((err,req,res,next)=>{
    res.fail(err.toString())
})
app.listen(config.port)


