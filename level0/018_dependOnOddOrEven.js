// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
// 제한사항) 1 ≤ n ≤ 100

function solution(n) {
    let answer = 0;
    if (n % 2 == 1) {
        for (let i = 1; i <= n; i += 2) {
            answer += i
        }
    } else {
        for (let i = 0; i <= n; i += 2) {
            answer += i**2
        }
    }
    return answer;
}
console.log(solution(7));
console.log(solution(10));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer n: ', (n) => {
    input.push(n);
    rl.close();
});

rl.on('close', function() {
    const n = Number(input[0]);
    let sum = 0;
    if (n % 2 == 1) {
        for (let i = 1; i <= n; i += 2) {
            sum += i
        }
    } else {
        for (let i = 0; i <= n; i += 2) {
            sum += i**2
        }
    }
    console.log(`result: ${sum}`);
});