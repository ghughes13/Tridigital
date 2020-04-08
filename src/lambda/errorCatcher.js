function logError(event, context, callback) {
  console.log(JSON.parse(event.body));
}

exports.handler = logError;
