// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
// 제한사항) 1 ≤ n ≤ 1,000

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on('line', function(line) {
    input = Number(line)
    rl.close();
}).on('close', function() {
    const n = input;
    if (n % 2 == 1) {
        console.log(n + ' is odd.');
    } else {
        console.log(n + ' is even.');
    }
});