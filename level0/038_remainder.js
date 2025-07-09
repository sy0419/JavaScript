// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
// 제한사항
// 1 ≤ number의 길이 ≤ 100,000
// number의 원소는 숫자로만 이루어져 있습니다.
// number는 정수 0이 아니라면 숫자 '0'으로 시작하지 않습니다.

function solution(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    return sum % 9;
}
console.log(solution("123"));
console.log(solution("78720646226947352489"))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('number: ', (number) => {
    input.push(number);
    rl.close();
});

rl.on('close', function() {
    const number = input[0];
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    const remainder = sum % 9;
    console.log(`Result: ${remainder}`);
})