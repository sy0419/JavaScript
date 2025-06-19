// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123   3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
// 제한사항) 1 ≤ a, b < 10,000

function solution(a, b) {
    const num1 = Number(a + '' + b)
    const num2 = Number(b + '' + a)
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(solution(12, 3))


function solution2(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
console.log(solution(12, 3))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('integer a: ', (a) => {
  input.push(a);
  rl.question('integer b: ', (b) => {
    input.push(b);
    rl.close();
  });
});

rl.on('close', function() {
    const a = input[0];
    const b = input[1];
    const num1 = Number(a + b)
    const num2 = Number(b + a)
    if (num1 > num2) {
        console.log(`result: ${num1}`);
    } else {
        console.log(`result: ${num2}`);
    }
})