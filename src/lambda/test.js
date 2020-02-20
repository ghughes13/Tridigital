exports.handler = function(event, context, callback) {
    // add form submission contents
    // add stripe call

    callback(null, {
        statusCode: 200,
        body: {
            event: event,
            context: context
        }
    });
}