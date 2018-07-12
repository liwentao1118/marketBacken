let Product = require('../modle/product');
let config = require('../config');

async function addProduct(product) {
    return  await Product.create(product);
    
}
async function getProductByPage(page = 0) {
    return await Product.find().skip(page*config.pageCount).limit(config.pageCount)
        .sort('created').select('-_v')
}
async function isExit(id) {
    let res = await Product.findOne({_id:id})
    if (!res){
        throw Error('商品不存在')
    }

}

async function deleteProduct(id) {
    isExit(id)
    let res = await Product.deleteOne({_id:id});
    if (res.n<1){
        throw Error('商品删除失败')
    }
}

async  function updateProduct(id, update) {
    isExit(id)
    let res = await Product.updateOne({_id:id},update);
    if (res.n<1){
        throw Error('商品更新失败')
    }
}

async function getProductById(id){
     return await Product.findOne({_id:id})
}


module.exports={
    addProduct,
    getProductByPage,
    deleteProduct,
    updateProduct,
    getProductById
}