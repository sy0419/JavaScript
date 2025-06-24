// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        product *= num_list[i];
    }
    if (product < sum * sum) {
        return 1;
    } else {
        return 0;
    }
}
console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer list num_list: ', (num_list) => {
    input.push(num_list);
    rl.close();
});

rl.on('close', function() {
    const num_list = input[0].split(",").map(n => Number(n.trim()));
    let sum = 0;
    let product = 1;
    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        product *= num_list[i];
    }
    if (product < sum * sum) {
        console.log(1);
    } else {
        console.log(0);
    }
});