/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

const sendResponse = (
  response: functions.Response,
  statusCode: number,
  body: any
) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

export const addQuestionListSet = functions
  .region("asia-northeast1")
  .https.onRequest(async (req: any, res: any) => {
    if (req.method !== "POST") {
      sendResponse(res, 405, { error: "Invalid Request!" });
    } else {
      const dataSet = req.body;
      for (const key of Object.keys(dataSet)) {
        const data = dataSet[key];
        await db.collection("questionDataList").doc(key).set(data);
      }
      sendResponse(res, 200, { message: "Successfully added dataset" });
    }
  });

export const addAnswerListSet = functions
  .region("asia-northeast1")
  .https.onRequest(async (req: any, res: any) => {
    if (req.method !== "POST") {
      sendResponse(res, 405, { error: "Invalid Request!" });
    } else {
      const dataSet = req.body;
      for (const key of Object.keys(dataSet)) {
        const data = dataSet[key];
        await db.collection("skillAnswerDataList").doc(key).set(data);
      }
      sendResponse(res, 200, { message: "Successfully added dataset" });
    }
  });

export const addGitAnswerListSet = functions
  .region("asia-northeast1")
  .https.onRequest(async (req: any, res: any) => {
    if (req.method !== "POST") {
      sendResponse(res, 405, { error: "Invalid Request!" });
    } else {
      const dataSet = req.body;
      for (const key of Object.keys(dataSet)) {
        const data = dataSet[key];
        await db.collection("gitAnswerDataList").doc(key).set(data);
      }
      sendResponse(res, 200, { message: "Successfully added dataset" });
    }
  });
