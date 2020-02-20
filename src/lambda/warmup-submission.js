exports.handler = function(event, context, callback) {
    // add form submission contents
    // add stripe call

    console.log(event);
    console.log(context);

    callback(null, {
        statusCode: 200,
        body: "Hello, World"
    });
}