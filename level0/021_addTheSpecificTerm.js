// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 
// included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
// 제한사항
// 1 ≤ a ≤ 100
// 1 ≤ d ≤ 100
// 1 ≤ included의 길이 ≤ 100
// included에는 true가 적어도 하나 존재합니다.

function solution(a, d, included) {
    let sum = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            sum += a + d * i;
        }
    }
    return sum;
};
console.log(solution(3, 4, [true, false, false, true, true]))
console.log(solution(7, 1, [false, false, false, true, false, false, false]))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer a: ', (a) => {
    input.push(a);
    rl.question('Integer d: ', (d) => {
        input.push(d);
        rl.question('Boolean array Included: ', (included) => {
            input.push(included);
            rl.close();
        });
    });
});

rl.on('close', function() {
    const a = Number(input[0]);
    const d = Number(input[1]);
    const rawArray = input[2]; 
    const included = rawArray.split(',').map(v => v.trim().toLowerCase() === 'true');
    let sum = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            sum += a + d * i;
        }
    }
    console.log('Result:', sum);
});