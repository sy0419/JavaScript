// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
// 제한사항) a, b, c는 1이상 6이하의 정수입니다.

function solution(a, b, c) {
    let result = 0;
    if (a == b && a == c && b == c) {
        result += (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    } else if (a != b && a != c && b != c) {
        result += a + b + c
    } else {
        result += (a + b + c) * (a**2 + b**2 + c**2)
    }
    return result;
}
console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));

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
        rl.question('Integer c: ', (c) => {
            input.push(c);
            rl.close();
        });
    });
});

rl.on('close', function() {
    const a = Number(input[0]);
    const b = Number(input[1]);
    const c = Number(input[2]);
    let result = 0;
    if (a == b && a == c && b == c) {
        result += (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    } else if (a != b && a != c && b != c) {
        result += a + b + c
    } else {
        result += (a + b + c) * (a**2 + b**2 + c**2)
    }
    console.log(`Result: ${result}`);
});