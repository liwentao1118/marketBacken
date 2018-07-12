let role =[
    {
        rolein:0,
        persission:[
            /.*\/product/,
            /.*\/order/,
            /.*\/category/,
        ],
        rolein:100,
        persission:[
            /.*/
        ]


    }
]

module.exports = (req,res,next)=>{

    if (req.user){
        let isGo = false
        role.forEach(item=>{
            if (item.rolein === req.user.role){
                item.persission.forEach(p=>{
                    if (p.test(req.url)){
                        isGo = true
                    }
                })
            }
        })
        if (!isGo) {
            throw Error('当前用户权限不足')
        }
    }
    next()

}