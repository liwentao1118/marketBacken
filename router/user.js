let router = require('express').Router();
let userService = require('../service/user');
router.get('/:username',async(req,res)=>{
    let  user = await userService.findOne(req.params.username)
    user.password=''
   res.success(user)
})

router.post('/register',async(req,res)=>{
    console.log(111)
    let user = await userService.register(req.body);
    console.log(111)
    res.success(user)
})
router.post('/login',async(req,res)=>{
    console.log(req.params.id)
    let token = await userService.login(req.body);
    res.success({token})
})
router.delete('/:username',async(req,res)=>{
    await userService.deleteOne(req.params.username)
    res.success()
})

module.exports=router