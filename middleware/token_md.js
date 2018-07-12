let crypto = require('lxj-crypto');
let config = require('../config');
let UserService =require('../service/user')
function isExclude(url){
    let arr = [
        /.*\/user\/login/,
        /.*\/user\/register/
    ]

    let isflag = false ;
    arr.forEach(item=>{
        if (item.test(url)) {
            isflag = true
        }
    })
    return isflag
}




module.exports=async (req,res,next)=>{

    if (!isExclude(req.url)){
        let token=  req.get('token')
        if (!token){
            throw Error('缺少token')
        }
        let tokenDate ;

        try {
            tokenDate = JSON.parse(crypto.aesDecrypt(token, config.TokenKey))
        } catch (e) {
            throw new Error('token不合法')
        }
        
        
        if (tokenDate.expire<Date.now()){
            throw Error("token已过期,请重新登录")
        }
        let userInfo = UserService.findOne(tokenDate.username)
        req.user = userInfo

    }

    next()


}