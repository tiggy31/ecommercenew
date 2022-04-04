const express = require("express");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const createCheckoutSession = require("./api/checkout");
const paymentIntent = require('./api/paymentIntent')
const webhook = require('./api/webhook')
const app = express()
const port = 8080;

app.use(express.json({
    verify:(req, res,buffer) => req['rawBody'] - buffer,

}))
app.use(cors({origin: true}))
app.get('/', (request,response) => response.send('hello world') )
app.post('/create-checkout-session', createCheckoutSession)
app.post('/create-payment-intent', paymentIntent)
app.post('/webhook', webhook)

app.listen(port, () => console.log('server listening on port', port));