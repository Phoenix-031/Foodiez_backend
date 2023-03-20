const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { messageCustom } = require('../functions/message');
const { OK } = require('../functions/messageType');

const payementIntent = async(req,res) => {
    const { amount, currency } = req.body;
    console.log(req.body);

    try {

        const paymentIntent =await stripe.paymentIntents.create({
            amount,
            currency,
            automatic_payment_methods:{
                enabled: true,
            }
        })

        messageCustom(res, OK, "Payment Intent Created", {
            error:false,
            client_secret: paymentIntent.id
        });
        
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = {
    payementIntent
}