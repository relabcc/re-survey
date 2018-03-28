const cors = require('cors');

const whitelist = [
  'http://localhost:3000',
  'https://survey.relab.cc/',
  'https://re-survey-b9bcc.firebaseapp.com/',
];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = cors(corsOptions);
