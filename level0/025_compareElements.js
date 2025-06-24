// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 
// 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
    if(num_list[num_list.length - 1] > num_list[num_list.length -2]) {
        num_list.push(num_list[num_list.length - 1] - num_list[num_list.length -2])
    } else {
        num_list.push(num_list[num_list.length - 1] * 2)
    }
    return num_list
};
console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));

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
    if(num_list[num_list.length - 1] > num_list[num_list.length -2]) {
        num_list.push(num_list[num_list.length - 1] - num_list[num_list.length -2])
    } else {
        num_list.push(num_list[num_list.length - 1] * 2)
    }
    console.log(`Result: ${num_list}`)
})