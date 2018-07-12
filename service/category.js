let Category = require('../modle/category');
let config = require('../config');
async function getCategoryByPage(page =1 ) {
    return await Category.find().skip(config.pageCount*(page-1)).limit(config.pageCount)
        .sort('created').select('-_v')
    
}

async function addCategory(category) {
    return await Category.create(category)
}

async function deleteCategory(id) {
    isExit(id)

    await Category.deleteOne({category:category})
}

async function isExit(id) {
    let res = await Category.find({_id:id});
    if (!res){
        throw Error(`id为${id}的商品不存在`)
    }

}
async function updateCategory(id, update) {
    isExit(id)
    let res = await Category.updateOne({_id:id},update);
    if (res.n<1){
        throw Error('更新商品失败')
    }

}

module.exports={
    addCategory,
    deleteCategory,
    updateCategory,
    getCategoryByPage,
}