let Order = require('../modle/order');
let productService = require('../service/product');
let config = require('../config');

async function addOrder(order) {
   let pro = await productService.getProductById(order.productId);
   if (pro.stock<=order.count){
       throw Error('库存不够')
   }
   order.productName= pro.name
    order.totalMoney = pro.price*order.count
    order.productPrice = pro.price

    let o = Order.create(order);
   await productService.updateProduct(pro.id,{stock:pro.stock-order.count})
    return o;

}

 async function getOrderByPage(page = 0) {
         return await Order.find().skip(config.pageCount*page).limit(config.pageCount).sort('created').select('-_v')
 }


 module.exports = {
    addOrder,
     getOrderByPage
 }