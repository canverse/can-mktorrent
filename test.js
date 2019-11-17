const mkt = require("./index.js");

mkt({
  announceUrls: ["http://detemps.theia.feralhosting.com/cantracker/announce"],
  comment: "created by can-mktorrent",
  pieceLength: 20,
  sourcePath: "~/.zshrc",
  webSeedUrls: ["https://detemps.theia.feralhosting.com/canTorrent/webSeed"],
  private: true
}).then(() => {
  console.log("here");
});
