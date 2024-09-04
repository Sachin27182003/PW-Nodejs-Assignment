// Write a Node.js program that uses the OS module to retrieve information about the current operating
// system


const os = require('os');

console.log('Operating System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Uptime: ${os.uptime()} seconds`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces(), null, 2)}`);
