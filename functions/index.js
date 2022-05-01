const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const email = user.email;
  console.info(`登録ユーザーのE-Mail：${email}`);

  // メールを送信する処理
  // sendMail(email)

  return;
});

exports.deleteUserData = functions.auth.user().onDelete(async (user) => {
  const userId = user.uid;
  console.info(`削除されたユーザーID：${userId}`);

  // 該当ユーザーのDB上のデータを削除する処理
  // 例）deleteUserDataFromFirestore(userId)
  // 例）deleteUserDataFromStorage(userId)

  return;
});