// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
// 제한사항) 2 ≤ num ≤ 100 , 2 ≤ n ≤ 9

function solution(num, n) {
    if (num % n == 0) {
        return 1
    } else {
        return 0
    }
}
console.log(solution(98, 2));
console.log(solution(34, 3));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.question('Integer num: ', (num) => {
    input.push(num);
    rl.question('Integer n: ', (n) => {
        input.push(n);
        rl.close()
    })
})

rl.on('close', function() {
    const num = Number(input[0]);
    const n = Number(input[1]);
    if (num % n == 0) {
        console.log('1')
    } else {
        console.log('0')
    }
});