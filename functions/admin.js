const firebaseAdmin = require('firebase-admin');

const firebaseConfig = require('./sa.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseConfig),
  databaseURL: `https://${firebaseConfig.project_id}.firebaseio.com`,
  databaseAuthVariableOverride: {
    uid: 'analysis-service-worker',
  },
});

module.exports = firebaseAdmin;
