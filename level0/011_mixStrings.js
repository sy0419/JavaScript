// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
// 제한사항
// 1 ≤ str1의 길이 = str2의 길이 ≤ 10
// str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.

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
    const str1 = input[0];
    const str2 = input[1];
    let result = '';
    for(let i = 0; i < str1.length; i++) {
        result += str1[i]
        result += str2[i];
    }
    console.log(result);
});