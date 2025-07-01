// 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.
// 변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.
// 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
// 위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Array: ', (arr) => {
    input.push(arr);
    rl.close();
});

rl.on('close', function() {
    const arr = input[0].split(/[\s,]+/).map(Number);
    console.log('Parsed arr:', arr);
    let stk = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else if (stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }
    console.log(stk);
});

// const arr = input[0].split(/[\s,]+/).map(Number);
// /[\s,]+/는 "공백(\s) 또는 쉼표(,)가 1개 이상 연속된 부분"을 기준으로 자르라는 뜻입니다.