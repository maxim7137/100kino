const { corsMessage } = require('../constants/messages');

const whiteList = [
  'https://localhost',
  'https://localhost/',
  'http://100.119.209.204',
  'http://100.119.209.204/',
  'http://localhost:3003',
  'http://localhost:3003/',
  'https://max-movie.surge.sh',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(corsMessage));
    }
  },
};

module.exports = corsOptions;
