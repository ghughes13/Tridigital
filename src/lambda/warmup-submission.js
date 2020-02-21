//require("dotenv").config();
const axios = require('axios');

//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

function hasValidBody(body) {
  return body.firstName
    && body.lastName
    && body.companyName
    && body.email
    && body.ccNumber
    && body.ccExpirationMonth
    && body.ccExpirationYear
    && body.cvv
    && body.priceTierId
    && body.cardholderName;
}

function sendErrorMessage(statusCode, message, callback) {
  console.error(message);
    
  callback(null, {
    statusCode,
    headers,
    body: JSON.stringify({ message })
  });
}

exports.handler = function(event, context, callback) {
  // try {
  //   var body = JSON.parse(event.body);
  // }
  // catch {
  //   sendErrorMessage(400, "Body not formatted in JSON.", callback);
  // }
  
  // if (!hasValidBody(body)) {
  //   sendErrorMessage(400, "Please fill out all required information.", callback);
  // }

  axios.post('https://eloquent-hawking-0b4899.netlify.com/', 'first=test&Last=bill&email=bwett01%40gmail.com&form-name=contact');
  // add form submission contents
  // add stripe call

  callback(null, {
    statusCode: 200
  });
}