// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
// 제한사항
// 1 ≤ str의 길이 ≤ 10
// 1 ≤ n ≤ 5

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

r1.on('line', function(line) {
    input = line.split(' ');
    r1.close();
}).on('close', function () {
    const str = input[0]
    const n = Number(input[1]);
    console.log(str.repeat(n));
})


// // 1. 입력 모듈 준비
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // 2. 입력 받기
// rl.on('line', function(line) {
//   // 3. 입력 나누기
//   let input = line.split(' ');      // 예: ["abc", "3"]
//   let str = input[0];               // 문자열
//   let n = Number(input[1]);         // 정수로 바꿈

//   // 4. 출력하기
//   console.log(str.repeat(n));       // "abcabcabc"

//   // 5. 입력 종료
//   rl.close();
// });

// const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = []

// r1.on('line', function(line) {
//     input = line.split(' ');
//     r1.close();
// 입력을 끝내겠다는 표시입니다.이게 실행되면 아래 .on('close', ...) 부분이 실행됩니다.
// 안 쓰면 프로그램은 입력을 계속 기다리면서 끝나지 않습니다.

// }).on('close', function () {
//     const str = input[0]
// 입력한 첫 번째 값, 즉 문자열 부분을 str이라는 변수에 저장합니다. 예: "hello"가 들어옵니다.

//     const n = Number(input[1]);
// 두 번째 값은 "3"처럼 문자열이기 때문에, Number()로 감싸서 숫자로 바꿔줘야 합니다. 예: n = 3

//     console.log(str.repeat(n));
// })
// str을 n번 반복한 문자열을 출력합니다. 예: "hello".repeat(3) → "hellohellohello"