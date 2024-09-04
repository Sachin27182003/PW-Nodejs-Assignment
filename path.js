// Write a Node.js program that uses the Path module to manipulate file paths.




const path = require('path');


const dirPath = '/user/local';
const fileName = 'example.txt';

const fullPath = path.join(dirPath, fileName);
console.log(`Full Path: ${fullPath}`);


const relativePath = 'data/logs/log.txt';
const absolutePath = path.resolve(relativePath);
console.log(`Absolute Path: ${absolutePath}`);


const dirname = path.dirname(fullPath);
console.log(`Directory Name: ${dirname}`);

const basename = path.basename(fullPath);
console.log(`Base Name: ${basename}`);


const extname = path.extname(fullPath);
console.log(`Extension Name: ${extname}`);


const messyPath = '/user//local/../local/example.txt';
const normalizedPath = path.normalize(messyPath);
console.log(`Normalized Path: ${normalizedPath}`);


const isAbsolute = path.isAbsolute(fullPath);
console.log(`Is Absolute: ${isAbsolute}`);


const parsedPath = path.parse(fullPath);
console.log('Parsed Path:');
console.log(`  Root: ${parsedPath.root}`);
console.log(`  Dir: ${parsedPath.dir}`);
console.log(`  Base: ${parsedPath.base}`);
console.log(`  Ext: ${parsedPath.ext}`);
console.log(`  Name: ${parsedPath.name}`);
