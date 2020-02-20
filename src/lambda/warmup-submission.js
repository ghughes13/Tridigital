//require("dotenv").config();

//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

function hasValidBody(body) {
    return false;
}

exports.handler = function(event, context, callback) {
    console.log(context);

    var body = JSON.parse(context.body);
    
    if (!hasValidBody(body)) {
        const message = "Please fill out all required information.";
        console.error(message);
    
        callback(null, {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            status: "Failed",
            message
          })
        });
    }

    // add form submission contents

    // add stripe call
    // {
    //     firstName,
    //     lastName,
    //     companyName,
    //     email,
    //     ccNumber,
    //     ccExpirationMonth,
    //     ccExpirationYear,
    //     cvv,
    //     priceTierId
    // }



    console.log('How did I make it here?');

    callback(null, {
        statusCode: 200
    });
}