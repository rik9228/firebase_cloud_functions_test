const functions = require("firebase-functions");
const otherFunctions = require("./otherFunctions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.func1 = otherFunctions.func1;

exports.scheduledFunc = functions.pubsub
  .schedule("*/5 * * * *")
  .onRun(async () => {
    console.info("5分毎に実行！");
    return;
  });