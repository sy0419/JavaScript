// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// my_string은 영소문자로만 이루어져 있습니다.
// 1 ≤ k ≤ 100

function solution(my_string, k) {
    return my_string.repeat(k);
}
console.log(solution("string", 3));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let my_string = '';
let k = 0;

rl.question('Enter the string: ', (answer1) => {
  my_string = answer1;
  rl.question('Integer k: ', (answer2) => {
    k = Number(answer2);
    console.log(`Result: ${my_string.repeat(k)}`); 
    rl.close();
  });
});