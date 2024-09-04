// 1. Write a Node.js program that reads content from a file named "input.txt" and writes the content to a new
// file named "output.txt"


const fs = require('fs');


const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';


fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        
        console.error(`Error reading the file: ${err}`);
        return;
    }
    
    
    fs.writeFile(outputFilePath, data, (err) => {
        if (err) {
            
            console.error(`Error writing the file: ${err}`);
            return;
        }
        
        console.log('Content successfully copied to output.txt');
    });
});
