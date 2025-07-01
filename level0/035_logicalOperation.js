// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
// (x1 ∨ x2) ∧ (x3 ∨ x4) 
// 입출력 예
// x1	    x2	    x3	    x4	    result
// false	true	true	true	true
// true	    false	false	false	false
// 입출력 예 설명
// 입출력 예 #1
// 예제 1번의 x1, x2, x3, x4로 식을 계산하면 다음과 같습니다.
// (x1 ∨ x2) ∧ (x3 ∨ x4) ≡ (F ∨ T) ∧ (T ∨ T) ≡ T ∧ T ≡ T
// 따라서 true를 return 합니다.
// 입출력 예 #2
// 예제 2번의 x1, x2, x3, x4로 식을 계산하면 다음과 같습니다.
// (x1 ∨ x2) ∧ (x3 ∨ x4) ≡ (T ∨ F) ∧ (F ∨ F) ≡ T ∧ F ≡ F
// 따라서 false를 return 합니다. 

function solution(x1, x2, x3, x4) {
    const result = (x1 || x2) && (x3 || x4);
    return result;
}
console.log(solution(false, true, true, true))
console.log(solution(true, false, false, false))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('x1: ', (x1) => {
    input.push(x1);
    rl.question('x2: ', (x2) => {
        input.push(x2);
        rl.question('x3: ', (x3) => {
            input.push(x3);
            rl.question('x4: ', (x4) => {
                input.push(x4);
                rl.close();
            })
        })
    })
});

rl.on('close', function() {
    const x1 = input[0].toLowerCase() === 'true';
    const x2 = input[1].toLowerCase() === 'true';
    const x3 = input[2].toLowerCase() === 'true';
    const x4 = input[3].toLowerCase() === 'true';
    const result = (x1 || x2) && (x3 || x4);
    console.log(result);
});