// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
// 제한 사항) 1 ≤ n, m ≤ 100

function solution(ineq, eq, n, m) {
if (ineq == '>' &&  eq == '=') {
        if (n >= m) {
            return 1;
        } else {
            return 0;
        }
    } else if (ineq == '<' &&  eq == '=') {
        if (n <= m) {
            return 1;
        } else {
            return 0;
        }
    } else if (ineq == '>' && eq == '!') {
        if (n > m) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (n < m) {
            return 1;
        } else {
            return 0;
        }
    }
};
console.log(solution('<', '=', 20, 50));
console.log(solution('>', '!', 41, 78));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.question('Operation ineq: ', (ineq) => {
    input.push(ineq);
    rl.question('Operation eq: ', (eq) => {
        input.push(eq);
        rl.question('Integer n: ', (n) => {
            input.push(n);
            rl.question('Integer m: ', (m) => {
                input.push(m);
                rl.close()
            })
        });
    })
})

rl.on('close', function() {
    const ineq = input[0];
    const eq = input[1];
    const n = Number(input[2]);
    const m = Number(input[3]);
    if (ineq == '>' &&  eq == '=') {
        if (n >= m) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else if (ineq == '<' &&  eq == '=') {
        if (n <= m) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else if (ineq == '>' && eq == '!') {
        if (n > m) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else {
        if (n < m) {
            console.log(1);
        } else {
            console.log(0);
        }
    }
});