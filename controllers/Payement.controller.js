const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { messageCustom } = require('../functions/message');
const { OK } = require('../functions/messageType');

const payementIntent = async(req,res) => {
    const { amount, currency } = req.body;
    console.log(req.body);

    try {
        const customer = await stripe.customers.create();

        const ephermalKey = await stripe.ephemeralKeys.create(
            {customer: customer.id},
            {apiVersion: '2022-11-15'}
        )
        console.log(ephermalKey)
        const paymentIntent =await stripe.paymentIntents.create({
            amount,
            currency,
            customer:customer.id,
            automatic_payment_methods:{
                enabled: true,
            }
        })
        // console.log(paymentIntent)

            messageCustom(res, OK, "Payment Intent Created", {
            error:false,
            client_secret: paymentIntent.client_secret,
            ephemeralKey: ephermalKey.secret,
            cusomer:customer.id
        });
        
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = {
    payementIntent
}