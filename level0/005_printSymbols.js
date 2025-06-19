const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

r1.on('line', function(line) {
    input = line.split('');
    r1.close();
}).on('close', function() {
    const str = input.join('');
    console.log(str);  
});