// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.
// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
// 제한사항)
//     1 ≤ arr의 길이 ≤ 1,000
//     0 ≤ arr의 원소 ≤ 1,000,000
//     1 ≤ queries의 길이 ≤ 1,000
//     0 ≤ s ≤ e < arr의 길이
//     0 ≤ k ≤ 1,000,000 *

function solution(arr, queries) {
    let answer = [];
    for (let q of queries) {
        let s = q[0];
        let e = q[1];
        let k = q[2];

        let min = Infinity;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        if (min === Infinity) {
            answer.push(-1);
        } else {
            answer.push(min);
        }
    }
    return answer;
};
console.log(`Result: ${solution([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]])}`)

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

    let answer = [];
    for (let q of queries) {
        let s = q[0];
        let e = q[1];
        let k = q[2];

        let min = Infinity;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        if (min === Infinity) {
            answer.push(-1);
        } else {
            answer.push(min);
        }
    }
    console.log(answer);
});