const mkt = require('./index.js');

mkt({
  announceUrls: ['http://localhost:32323/cantracker/announce'],
}).then(() => {
  console.log('here');
});
