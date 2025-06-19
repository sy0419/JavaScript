// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요. 'a + b = c'
// 제한사항) 1 ≤ a, b ≤ 100

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

r1.on('line', function(line) {
    input = line.split(' ');
    r1.close();
}).on('close', function() {
    const a = Number(input[0]);
    const b = Number(input[1]);
    const sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
});