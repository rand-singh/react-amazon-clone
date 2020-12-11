const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('SECRET_KEY_HERE');

// API SETUP

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());


// - API Routes
app.get('/', (request, response) => response.status(200).send('its working!'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "gbp"
    });

    // 201 means ok, but its also created something, in this case a payment Intent
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-45940/us-central1/api