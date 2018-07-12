let config = null
if (process.env.NPM_ENV==='production') {
    config=require('./config-pro')
}else {
    config=require('./config-dev')
}

module.exports= config