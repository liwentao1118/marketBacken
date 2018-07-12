let User = require('../modle/user');
let crypto = require('lxj-crypto');
let config = require('../config')

 async function register(user) {
     let res = await User.findOne({username: user.username});
     if (res) {
         throw Error(`用户名为${user.username}的用户已经存在`)
     }
     console.log(user)
     user.password = crypto.sha1Hmac(user.password,user.username)
     user.role = 0
     user.created= Date.now()
     console.log(user.password)

    res = await User.create(user);
     res.password = ''
    return res;
}

async function deleteOne(username) {
     findOne(username);

    let res = await User.deleteOne({username:username});
    if (res.n<1) {
        throw Error('删除失败')
    }
}


async function update(user) {
     await User.update({username:user.username},user)

}


async function findOne(username) {
     let res = await User.findOne({username:username});
     if (!res) {
         throw Error(`用户名${username}不存在`)
     }
     return res
}


async function login(user) {
     user.password = crypto.sha1Hmac(user.password,user.username)
    let res = await User.findOne({username:user.username,password:user.password});
     if (!res){
         throw Error('用户名或者密码错误')
     }
    let tokenData = {
         username:user.username,
        expire:Date.now()+config.TokenExpire
    }
    let token = crypto.aesEncrypt(JSON.stringify(tokenData),config.TokenKey)

    return token

}

module.exports={
    login,findOne,register,deleteOne
}