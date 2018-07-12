let userService = require('../service/user');
require('../db')
function testregister() {
    let user ={
        username:"zuohuanhuan",
        password:"123",
        age:18
    }
    userService.register(user)
}
testregister()