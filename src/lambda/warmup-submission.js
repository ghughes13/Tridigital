require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_TEST);
const axios = require('axios');

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

var body;
var stripeCustomerId;
var stripePaymentMethodId;

var plans = [
  'tridigitalmarketingwarmup-lovinit_27_1month_130000', 
  'tridigitalmarketingwarmup-feelinit_26_1month_140000',
  'tridigitalmarketingwarmup-testinit_25_1month_150000'
];

function handleRequest(event, context, callback) {
  try {
    body = JSON.parse(event.body);
  }
  catch {
    sendErrorMessage(400, "Body not formatted in JSON.", callback);
  }
  
  if (!hasValidBody()) {
    sendErrorMessage(400, "Please fill out all required information.", callback);
  }

  // postFormSubmission()
  createStripeCustomer()
    .then(createStripePaymentMethod)
    .then(assignPaymentMethodToCustomer)
    .then(createStripeSubscription)
    .then(() => {
      callback(null, {
        statusCode: 200
      });
    })
    .catch(error => {
      sendErrorMessage(400, error.toString(), callback);
    });
}

function hasValidBody() {
  var isValidPriceTierId = body.priceTierId === 0
    || body.priceTierId === 1
    || body.priceTierId === 2;

  return body.firstName
    && body.lastName
    && body.companyName
    && body.email
    && body.ccNumber
    && body.ccExpirationMonth
    && body.ccExpirationYear
    && body.ccCardholderName
    && body.cvv
    && isValidPriceTierId;
}

function sendErrorMessage(statusCode, message, callback) {
  console.error(message);
    
  callback(null, {
    statusCode,
    headers,
    body: JSON.stringify({ message })
  });
}

function postFormSubmission() {
  var request = `form-name=warmup&firstName=${body.firstName}&lastName=${body.lastName}&email=${body.email}&companyName=${body.companyName}&priceTierId=${body.priceTierId}`;
  return axios.post('https://eloquent-hawking-0b4899.netlify.com/', request);
}

function createStripeCustomer() {
  return new Promise((resolve, reject) => {
    var customer = {
      email: body.email,
      description: body.companyName
    };

    stripe.customers.create(
      customer, 
      (error, customer) => { 
        if (customer) {
          stripeCustomerId = customer.id;
          resolve();
        }
        else {
          reject(error); 
        }
      }
    );
  });
}

function createStripePaymentMethod() {
  return new Promise((resolve, reject) => {
    var card = {
      type: 'card',
      card: {
        number: body.ccNumber,
        exp_month: body.ccExpirationMonth,
        exp_year: body.ccExpirationYear,
        cvc: body.cvv,
      }
    };

    stripe.paymentMethods.create(
      card, 
      (error, paymentMethod) => {
        if (paymentMethod) {
          stripePaymentMethodId = paymentMethod.id;
          resolve();
        }
        else {
          reject(error);
        }
      }
    );
  });
}

function assignPaymentMethodToCustomer() {
  return new Promise((resolve, reject) => {
    stripe.paymentMethods.attach(
      stripePaymentMethodId, 
      { customer: stripeCustomerId }, 
      (error, paymentMethod) => {
        if (paymentMethod) {
          resolve();
        }
        else {
          reject(error);
        }
      }
    );
  });
}

function createStripeSubscription() {
  return new Promise((resolve, reject) => {
    resolve();

     stripe.subscriptions.create(
      {
        customer: stripeCustomerId,
        items: [{ plan: plans[body.priceTierId] }],
      },
      (error, subscription) => {
        if (subscription) {
          resolve();
        }
        else {
          reject(error);
        }
      }
    );
  });
}

exports.handler = handleRequest;