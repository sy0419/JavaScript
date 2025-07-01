// 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
// 제한사항) 0 ≤ start_num ≤ end_num ≤ 50

function solution(start_num, end_num) {
    let result = [];
    for (let i = start_num; i <= end_num; i++) {
        result.push(i);
    }
    return result;
};
console.log(solution(3, 10));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Start num: ', (start_num) => {
    input.push(start_num);
    rl.question('End num: ', (end_num) => {
        input.push(end_num);
        rl.close();
    })
});

rl.on('close', function() {
    const start_num = Number(input[0]);
    const end_num = Number(input[1]);
    let result = [];
    for (let i = start_num; i <= end_num; i++) {
        result.push(i);
    }
    console.log(result);
});