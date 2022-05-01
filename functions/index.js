const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.noticeCreateEvent = functions.storage.object().onFinalize((object) => {
  const bucketName = object.bucket;
  const fileName = object.name;
  const fileSize = object.size;
  const contentType = object.contentType;

  console.log(
    `バケット：${bucketName}\nファイル名：${fileName}\nファイルサイズ：${fileSize}byte\nコンテンツタイプ：${contentType}`
  );
  return;
});

exports.noticeDeleteEvent = functions.storage.object().onDelete((object) => {
  const bucketName = object.bucket;
  const fileName = object.name;
  const fileSize = object.size;
  const contentType = object.contentType;

  console.log(
    `バケット：${bucketName}\nファイル名：${fileName}\nファイルサイズ：${fileSize}byte\nコンテンツタイプ：${contentType}`
  );
  return;
});