let orderService = require('../service/order');
let router = require('express').Router();


router.post('/',async(req,res)=>{
    let s = await orderService.addOrder(req.body);
    res.success(s)
})

router.get('/',async(req,res)=>{
    let s = await orderService.getOrderByPage(req.query.page);
     res.success(s)

})

module.exports = router