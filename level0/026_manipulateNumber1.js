// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, 
// control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
// 제한사항
// -100,000 ≤ n ≤ 100,000
// 1 ≤ control의 길이 ≤ 100,000
// control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.

function solution(n, control) {
    let result = n;

    for (let c of control) {
        if (c === 'w') {
            result += 1;
        } else if (c === 's') {
            result -= 1;
        } else if (c === 'd') {
            result += 10;
        } else if (c === 'a') {
            result -= 10;
        }
    }
    return result;
};
console.log(solution(0, 'wsdawsdassw'));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer n: ', (n) => {
    input.push(n);
    rl.question('String control: ', (control) => {
        input.push(control);
        rl.close();
    })
});

rl.on('close', function() {
    const n = Number(input[0]);
    const control = input[1];
    let result = n;

    for (let c of control) {
        if (c === 'w') {
            result += 1;
        } else if (c === 's') {
            result -= 1;
        } else if (c === 'd') {
            result += 10;
        } else if (c === 'a') {
            result -= 10;
        }
    }
    console.log(`Result: ${result}`);
})