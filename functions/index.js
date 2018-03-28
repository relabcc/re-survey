const functions = require('firebase-functions');

const admin = require('./admin');
const cors = require('./cors');
const database = admin.database();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.setUserAgentData = functions.https.onRequest((req, res) => cors(req, res, () => {
  const { key } = req.query;
  const meta = {
    ip: req.headers['cf-connecting-ip'],
    userAgent: req.headers['user-agent'],
  };

  database.ref(`logs/${key}/meta`).set(meta).then(() => {
    res.json(meta);
  }).catch((err) => {
    res.status(500).json({ error: err.toString() });
  });
}));
