process.stdin.resume();
process.stdin.setEncoding('utf8');

var fs = require('fs');
var path = __dirname + '/data';
var input = '';

function checkIfDirectoryExists(directory, cb) {
  fs.stat(directory, function fsStat(err, stats) {
    if (err) {
      if (err.code === 'ENOENT') {
        return cb(null, false);
      } else {
        return cb(err);
      }
    }
    return cb(null, stats.isDirectory());
  });
}

function writeData(input) {
  fs.writeFile(path + '/input.txt', input, 'utf-8', function (err) {
    if (err) {
      console.log("failed to save");
    }
    console.log('file created!');
    process.exit();
  });
}

process.stdin.on('data', function(str) {
  input += str.trim();
  if (str.trim() === '\\q') {
    input = input.slice(0,-2); 
    checkIfDirectoryExists(path, function(err, isDirectory) {
      if (isDirectory) {
        console.log('path exists');
        writeData(input);
      } else {
        console.log('path does not exists');
        console.log('create dir');
        fs.mkdir(path);
        writeData(input);
      }
    });
  } else {
    console.log(input);
  }
});
