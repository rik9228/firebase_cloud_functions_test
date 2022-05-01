const functions = require("firebase-functions");

exports.func1 = functions.https.onRequest((request, response) => {
  response.send("Func1!");
});
