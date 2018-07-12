let router = require('express').Router();
let productService  = require('../service/product');

router.get('/',async(req,res)=>{
    let s = await productService.getProductByPage(req.query.page);
    res.success(s)

})

 router.post('/',async(req,res)=>{
     let s = await productService.addProduct(req.body)
     res.success(s)
 })

router.put('/:id',async(req,res)=>{
    await productService.updateProduct(req.params.id,req.body)
    res.success()
})

router.delete('/:id',async(req,res)=>{
    await productService.deleteProduct(req.params.id)
    res.success()
})
module.exports = router