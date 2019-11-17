#!/usr/bin/env node
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

function expandHome(p) {
  return p.startsWith("~/") ? path.join(process.env.HOME, p.slice(2)) : p;
}

module.exports = function createTorrent(
  opts = {
    announceUrls: [],
    comment: "",
    noDate: false,
    pieceLength: 18,
    name: "",
    sourcePath: "",
    output: "",
    private: false,
    webSeedUrls: []
  }
) {
  return new Promise((resolve, reject) => {
    const args = [];

    if (opts.announceUrls.length < 1) {
      reject("You must supply at least one announce URL!");
      return;
    }
    args.push("-a", opts.announceUrls.join(","));

    if (opts.sourcePath.length < 1) {
      reject("You must supply the source path!");
      return;
    }

    const expandedPath = expandHome(opts.sourcePath);

    let stat;
    try {
      console.log("stat!");
      stat = fs.statSync(expandedPath);
    } catch {
      reject("Given source path doesn't exist!");
      return;
    }

    if (opts.comment) {
      args.push("-c", `"${opts.comment}"`);
    }

    if (opts.noDate) {
      args.push("-d");
    }

    if (opts.pieceLength) {
      args.push("-l", opts.pieceLength.toString());
    }

    if (opts.name) {
      args.push("-n", opts.name);
    }

    if (opts.output) {
      args.push("-o", opts.output);
    }

    if (opts.private) {
      args.push("-p");
    }

    if (opts.webSeedUrls.length) {
      let webSeeds = "";
      if (stat.isFile()) {
        webSeeds = opts.webSeedUrls
          .map(x => path.join(x, path.basename(expandedPath)))
          .join(",");
      } else {
        webSeeds = opts.webSeedUrls.join(",");
      }
      args.push("-w", webSeeds);
    }

    args.push(expandedPath);

    const binaryPath = path.join(module.path, "build/Release/mkt");
    exec(`${binaryPath} ${args.join(" ")}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      resolve();
    });
  });
};

console.log("hello there!");
