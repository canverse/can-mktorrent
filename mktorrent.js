var mktorrent = require("bindings")("mktorrent.node");

mktorrent.create_torrent('-a', 'http://detemps.theia.feralhosting.com/cantracker/announce', '-p', '-v', './lib', '-n', 'testi.torrent');
/*
mktorrent.create({
  announceUrls: [],
  comment: '',
  skipCreationDate: false,
  pieceLength: 18,
  name: '',
  fileName: '',
  private: true,
  sourceString: '',
  verbase: false,
  webSeedUrls: [],
});
*/
