// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string의 원소는 영소문자로 이루어져 있습니다.
// 1 ≤ index_list의 길이 ≤ 1,000
// 0 ≤ index_list의 원소 < my_string의 길이

function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('');
}
console.log(solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('My string: ', (my_string) => {
    input.push(my_string);
    rl.question('index_list: ', (index_list) => {
        input.push(index_list);
        rl.close();
    })
});

rl.on('close', function() {
    const myString = input[0];
    const indexList = input[1].split(',').map(s => Number(s.trim()));

    const result = indexList.map(i => myString[i]).join('');

    console.log('Result:', result);
})