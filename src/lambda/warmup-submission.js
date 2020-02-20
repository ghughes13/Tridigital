//require("dotenv").config();

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
    && body.priceTierId;
}

exports.handler = function(event, context, callback) {
    var body = JSON.parse(event.body);
    
    if (!hasValidBody(body)) {
        const message = "Please fill out all required information.";
        console.error(message);
    
        callback(null, {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message })
        });
    }

    // add form submission contents
    // add stripe call

    callback(null, {
        statusCode: 200
    });
}