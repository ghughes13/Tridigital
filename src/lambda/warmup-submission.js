//require("dotenv").config();
const axios = require('axios');

//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

function handleRequest(event, context, callback) {
  try {
    var body = JSON.parse(event.body);
  }
  catch {
    sendErrorMessage(400, "Body not formatted in JSON.", callback);
  }
  
  if (!hasValidBody(body)) {
    sendErrorMessage(400, "Please fill out all required information.", callback);
  }

  // postFormSubmission(body)
  //   .then(() => { 
  //     return createStripeSubscription(body);
  //   })
  createStripeSubscription(body)
    .then(() => {
      callback(null, {
        statusCode: 200
      });
    })
    .catch(error => {
      sendErrorMessage(400, error.toString(), callback);
    });
}

function hasValidBody(body) {
  return body.firstName
    && body.lastName
    && body.companyName
    && body.email
    && body.ccNumber
    && body.ccExpirationMonth
    && body.ccExpirationYear
    && body.ccCardholderName
    && body.cvv
    && body.priceTierId;
}

function sendErrorMessage(statusCode, message, callback) {
  console.error(message);
    
  callback(null, {
    statusCode,
    headers,
    body: JSON.stringify({ message })
  });
}

function postFormSubmission(body) {
  var request = `form-name=warmup&firstName=${body.firstName}&lastName=${body.lastName}&email=${body.email}&companyName=${body.companyName}&priceTierId=${body.priceTierId}`;
  return axios.post('https://eloquent-hawking-0b4899.netlify.com/', request);
}

function createStripeSubscription(body) {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

exports.handler = handleRequest;