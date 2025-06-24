// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9
// num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

function solution(num_list) {
    let oddStr = '';
    let evenStr = '';
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 1) {
            oddStr += num_list[i];
        } else {
            evenStr += num_list[i];
        }
    }
    const oddNum = Number(oddStr);
    const evenNum = Number(evenStr);
    const result = oddNum + evenNum;

    return result;
};
console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Enter num_list: ', (num_list) => {
    input.push(num_list);
    rl.close();
});

rl.on('close', function() {
    const num_list = input[0].split(',').map(n => Number(n.trim()));
    let oddStr = '';
    let evenStr = '';
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 1) {
            oddStr += num_list[i];
        } else {
            evenStr += num_list[i];
        }
    }
    const oddNum = Number(oddStr);
    const evenNum = Number(evenStr);
    const result = oddNum + evenNum;

    console.log(`Result: ${result}`);
});