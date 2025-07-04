// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
// 제한사항  
//    1 ≤ arr의 길이 ≤ 1,000
//    0 ≤ arr의 원소 ≤ 1,000,000
//    1 ≤ queries의 길이 ≤ 1,000
//    0 ≤ s ≤ e < arr의 길이
//    0 ≤ k ≤ 5

function solution(arr, queries) {
    for (let query of queries) {
        let s = query[0];
        let e = query[1];
        let k = query[2];

        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                arr[i] += 1;
            }
        }
    }
    return arr;
}
console.log(`Result: ${solution([0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]])}`)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Integer array arr: ', (arr) => {
    input.push(arr);
    rl.question('Integer array queries: ', (queries) => {
        input.push(queries);
        rl.close();
    })
});

rl.on('close', function() {
    const arr = JSON.parse(input[0]);     
    const queries = JSON.parse(input[1]);
    for (let query of queries) {
        let s = query[0];
        let e = query[1];
        let k = query[2];

        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                arr[i] += 1;
            }
        }
    }
    console.log(arr);
});