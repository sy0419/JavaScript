// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
// 제한사항) 10 ≤ number ≤ 100 , 2 ≤ n, m < 10

function solution(number, n, m) {
    if (number % n == 0 && number % m == 0) {
        return 1
    } else {
        return 0
    }
}
console.log(solution(60, 2, 3));
console.log(solution(55, 10, 5));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer number: ', (number) => {
    input.push(number);
    rl.question('Integer n: ', (n) => {
        input.push(n);
        rl.question('integer m: ', (m) => {
            input.push(m);
            rl.close();
        })
    })
});

rl.on('close', function() {
    const number = Number(input[0]);
    const n = Number(input[1]);
    const m = Number(input[2]);
    if (number % n == 0 && number % m == 0) {
        console.log('1')
    } else {
        console.log('0')
    }
})