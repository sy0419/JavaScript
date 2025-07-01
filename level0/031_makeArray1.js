// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 
// 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
// 제한사항) 1 ≤ l ≤ r ≤ 1,000,000

function solution(l, r) {
     let result = [];
    for (let i = l; i <= r; i++) {
        let strI = String(i);
        if (strI.split('').every(char => char === '0' || char === '5')) {
            result.push(i);
        }
    }
    if (result.length === 0) {
        result.push(-1);
    }
    return result;
}
console.log(solution(5, 555));
console.log(solution(10, 20));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer l: ', (l) => {
    input.push(l);
    rl.question('Integer r: ', (r) => {
        input.push(r);
        rl.close();
    })
});

rl.on('close', function() {
    const l = Number(input[0]);
    const r = Number(input[1]);
    let result = [];
    for (let i = l; i <= r; i++) {
        let strI = String(i);
        if (strI.split('').every(char => char === '0' || char === '5')) {
            result.push(i);
        }
    }
    if (result.length === 0) {
        result.push(-1);
    }
    console.log(result);
})