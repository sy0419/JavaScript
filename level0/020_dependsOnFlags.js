// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 
// false면 a - b를 return 하는 solution 함수를 작성해 주세요.
// 제한사항) -1,000 ≤ a, b ≤ 1,000

function solution(a, b, flag) {
    if (flag === true) {
        return a+b;
    } else {
        return a-b;
    }
}
console.log(solution(-4, 7, true));
console.log(solution(-4, 7, false));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer a: ', (a) => {
    input.push(a);
    rl.question('Integer b: ', (b) => {
        input.push(b);
        rl.question("Boolean flag: ", (flag) => {
            input.push(flag);
            rl.close();
        })
    })
});

rl.on('close', function() {
    const a = Number(input[0]);
    const b = Number(input[1]);
    const flag = input[2] === 'true';
    if (flag === true) {
        console.log(`Result: ${a+b}`)
    } else {
        console.log(`Result: ${a-b}`)
    }
});