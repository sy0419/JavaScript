// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
// 제한사항
// my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
// 1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
// 0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on('line', function(line) {
    input = line.split(' ');
    rl.close();
}).on('close', function() {
    const my_string = input[0];
    const overwrite_string = input[1];
    const s = Number(input[2]);
    const result = my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
    console.log(result);
})