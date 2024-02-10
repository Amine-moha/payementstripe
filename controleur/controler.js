const stripe=require("stripe")
const secretkey=stripe("sk_test_51Of19zH2CNfw3Y5bohRUJexHeAIHH3BTORz5rUsV2brWMG1miJRnsvJk7FYebXvllRYrvTHTCx7gSSuEDcE9cgwv00kF5P1rZk")
exports.payment=async(req,res)=>{
    const line_items=req.body.cart.map(item=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.title,
                        images : [item.product.image],

                        description: item.product.description,
                        metadata:{
                            id:item.product._id
                        }
                    },
                    unit_amount: item.product.price*100,
                },
                quantity:item.quantity,
            }

    })
    const session = await secretkey.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/',
        cancel_url: 'http://localhost:3000/cart',
    });
    res.send({url:session.url})
}
