// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
// 제한사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

r1.on('line', function(line) {
    input = line.split('');
    r1.close();
}).on('close', function() {
    let result = '';
    for(let i = 0; i < input.length; i++) {
        const str = input[i];
        if (str == str.toUpperCase()) {
            result += str.toLowerCase();
        } else {
            result += str.toUpperCase();
        }
    }
    console.log(result);
})