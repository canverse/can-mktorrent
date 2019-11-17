#!/usr/bin/env node
const {exec} = require('child_process');

module.exports = function createTorrent(opts = {
  announceUrls: [''],
  comment: '',
  skipCreationDate: false,
  pieceLength: 18,
  name: '',
  fileName: '',
  private: true,
  sourceString: '',
  verbase: false,
  webSeedUrls: [''],
}) {
  return new Promise((resolve, reject) => {
    const args = [];
    args.push('-a');
    args.push(opts.announceUrls.join(','))
    args.push('-n');
    args.push('test.torrent');
    args.push('-p');
    args.push('./');

    exec(`./build/Release/mkt ${args.join(' ')}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      resolve();
    });

  });
}

console.log('hello there!');
