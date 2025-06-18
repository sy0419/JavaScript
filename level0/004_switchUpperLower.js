// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
// 제한사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

r1.on('line', function(line) {
    input = line.split('');
    r1.close();
}).on('close', function() {
    let result = '';
    for(let i = 0; i < input.length; i++) {
        const str = input[i];
        if (str == str.toUpperCase()) {
            result += str.toLowerCase();
        } else {
            result += str.toUpperCase();
        }
    }
    console.log(result);
})

// }).on('close', function() {
//     let result = '';
// 변환된 문자를 하나씩 모을 빈 문자열 변수입니다.
// 처음에는 아무 것도 없고, 한 글자씩 대소문자를 바꿔서 여기다가 이어 붙이게 됩니다.

//     for(let i = 0; i < input.length; i++) {
// 용자 입력으로 받은 문자열이 input에 배열로 저장되어 있으므로, 배열의 길이만큼 반복문을 돌면서 한 글자씩 처리합니다.

//         const str = input[i];
// input 배열에서 현재 인덱스의 문자를 꺼내서 str에 저장합니다.
// 예: input이 ['a', 'B', 'c']이면, i=0 → str = 'a', i=1 → str = 'B', i=2 → str = 'c'

//         if (str == str.toUpperCase()) {
// 현재 문자가 대문자인지 검사합니다. 즉, str.toUpperCase()는 문자를 대문자로 바꾼 결과입니다.
// 만약 원래 문자와 대문자로 바꾼 값이 같다면 → 원래도 대문자

//             result += str.toLowerCase();
// 대문자였으면 → 소문자로 바꿔서 result에 추가합니다.

//         } else {
//             result += str.toUpperCase();
//만약 대문자가 아니라면 소문자이므로 대문자로 바꿔서 result에 추가합니다.

//         }
//     }
//     console.log(result);
// })
// 변환이 완료된 최종 결과 문자열을 콘솔에 출력합니다.