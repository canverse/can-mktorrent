const mkt = require("./index.js");

mkt({
  announceUrls: ["http://detemps.theia.feralhosting.com/cantracker/announce"],
  comment: "created by can-mktorrent",
  pieceLength: 20,
  sourcePath: "~/test folder with spaces/",
  webSeedUrls: ["https://detemps.theia.feralhosting.com/canTorrent/webSeed"],
  private: true,
  verbose: true
}).then(() => {
  console.log("here");
});
