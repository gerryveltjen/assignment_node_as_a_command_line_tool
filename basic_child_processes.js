var cpExec = require('child_process');

var cmdExec = cpExec.exec('ps aux', (err, stdout, stderr) => {
  if (err) {
   console.error(err.stack);
   console.error(`Error code: ${ err.code }`);
   console.error(`Signal received: ${ err.signal }`);
  }
  if (stderr) {
    console.error(`Child Process STDERR: ${ stderr }`);
  }
  console.log(`Child Process STDOUT: ${ stdout }`);
});
cmdExec.on('exit', (code) => {
  console.log(`Child process exited with code: ${ code }`);
});

var cpSpawn = require('child_process');

var cmdSpawn = cpSpawn.spawn('ps',['aux']);

cmdSpawn.on('error', (err) => {
  console.error(`${ err.stack }`);
});
cmdSpawn.stdout.on('data', (data) => {
  console.log(`Data: ${ data }`);
});
cmdSpawn.stderr.on('data', (data) => {
  console.error(`STDERR: ${ data }`);
});
cmdSpawn.on('close', (code) => {
  console.log(`Child process exited with code: ${ code }`);
});
