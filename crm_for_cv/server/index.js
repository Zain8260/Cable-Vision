const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")('sk_test_51KKojiDeAFMIypzbJuS77qODkYj7TcBswwPmFPmbFm8vKcNPs5SmIPLBzvklM6CZ5MvEUkhfWv44szUkIrLtkdvr00SSy03HZW')
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
	let { amount, id,name } = req.body
    
      
	try {
        const customer = await stripe.customers.create({
            name:name
          });
          
          const paymentMethod = await stripe.paymentMethods.create(
            {
              type: 'card',
              card: {
                number: '4242424242424242',
                exp_month: 6,
                exp_year: 2022,
                cvc: '314',
              },
            }
          );
          
          const product = await stripe.products.create(
            {name: 'Internet Bundle'}
          );
          
          const price = await stripe.prices.create(
            {
              unit_amount: 100,
              currency: 'usd',
              recurring: {interval: 'month'},
              product: product.id,
            }
          );
          
          // Everything above here is just setting up this demo
          
          const attachPaymentToCustomer = await stripe.paymentMethods.attach(
            paymentMethod.id,  // <-- your payment method ID collected via Stripe.js
            { customer: customer.id } // <-- your customer id from the request body  
            
          ); 
          
          const updateCustomerDefaultPaymentMethod = await stripe.customers.update(
            customer.id, { // <-- your customer id from the request body
            
              invoice_settings: {
                default_payment_method: paymentMethod.id, // <-- your payment method ID collected via Stripe.js
              },
          });
          
          const newSubscription = await stripe.subscriptions.create({
            customer: customer.id, // <-- your customer id from the request body
            items: [{ plan: price.id, quantity: 1 }], // <-- plans and prices are compatible Prices is a newer API
            default_payment_method: paymentMethod.id, // <-- your payment method ID collected via Stripe.js
          });
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Cable Vision                ",
			payment_method: paymentMethod.id,
			confirm: true,
            customer:customer.id
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})