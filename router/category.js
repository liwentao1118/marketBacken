let router = require('express').Router()
let categroyService = require('../service/category');

router.get('/:id',async(req,res)=>{
    let  categorys = await categroyService.getCategoryByPage(req.query.page);
    res.success(categorys)
})

router.delete('/:id',async(req,res)=>{
    await categroyService.deleteCategory(req.params.id)
    res.success()
})
router.post('/',async(req,res)=>{
    let s = await categroyService.addCategory(req.body);
    res.success(s)
})
router.put('/:id',async(req,res)=>{
     await categroyService.updateCategory(req.params.id,req.body)
    res.success()

})

module.exports= router