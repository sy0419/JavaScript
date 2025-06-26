// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다. 
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
// 제한사항)
// 1 ≤ arr의 길이 ≤ 1,000 
// 0 ≤ arr의 원소 ≤ 1,000,000
// 1 ≤ queries의 길이 ≤ 1,000
// 0 ≤ i < j < arr의 길이 

function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    });
    return arr;
}
console.log(`Result: ${solution([0, 1, 2, 3, 4], [[0, 3],[1, 2],[1, 4]])}`);

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
});``

rl.on('close', function() {
    const arr = input[0].split(',').map(Number);
    const queries = JSON.parse(input[1]);

    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    });
    console.log(`Result: ${arr}`);
})

// rl.on('close', function() {
//     const arr = input[0].split(',').map(Number);
// input[0]에는 사용자로부터 받은 문자열 "0,1,2,3,4" 같은 게 들어 있습니다.
// .split(',')으로 콤마 기준으로 나눠서 ["0", "1", "2", "3", "4"] 배열로 만들고,
// .map(Number)를 사용해서 문자열을 숫자로 바꿔 arr = [0, 1, 2, 3, 4]로 만든 것입니다.

//     const queries = JSON.parse(input[1]);
// input[1]에는 사용자로부터 입력받은 문자열 (예: "[[0,3],[1,2],[1,4]]")이 들어 있습니다.
// JSON.parse()는 이 문자열을 진짜 2차원 배열로 바꿔줍니다. → 결과: queries = [[0,3], [1,2], [1,4]]

//     queries.forEach( ([a,b]) => {
// queries 배열 안의 각 쿼리(query)에 대해 반복합니다.
// 각 쿼리는 [i, j] 형식이므로 구조 분해 할당으로 a, b 변수에 각각 저장합니다.
// 예: forEach(([0, 3]) => { ... }) → a = 0, b = 3

//         [arr[a],arr[b]] = [arr[b],arr[a]];
// 배열 arr의 a번 인덱스와 b번 인덱스 값을 서로 스왑하는 코드입니다.
// 구조 분해 할당(Destructuring Assignment)을 활용해서 한 줄로 교환하는 방법입니다.
// 예: a = 0, b = 3일 때 → arr[0]과 arr[3] 값이 바뀝니다.

//     });
//     console.log(`Result: ${arr}`);
// })