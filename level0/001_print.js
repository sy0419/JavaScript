// 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
// 제한사항
// 1 ≤ str의 길이 ≤ 1,000,000
// str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

// #1
let str1 = "Helloworld"
console.log(str1);

// #2
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter string: ', (str2) => {
  console.log(`result: ${str2}`);
  rl.close();
});

// #3
const readline2 = require('readline');
const r2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
r2.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str3 = input[0];
    console.log(str3);
});

// 왜 readline을 쓰나요?
// 자바스크립트는 원래 웹 브라우저에서 동작하는 언어라서, 브라우저에서는 prompt() 같은 걸로 입력을 받을 수 있어요.
// 하지만, 지금 우리가 쓰는 VS Code + Node.js는 터미널 환경이기 때문에 **사용자 입력을 받으려면 readline이라는 도구(모듈)**가 필요해요.
// 즉, readline은 Node.js에서 사용자의 키보드 입력을 읽어오는 공식적인 방법이에요.

// #1
// let str1 = "Helloworld"
// let 키워드로 str1이라는 변수를 선언하고 "Helloworld"라는 문자열을 저장합니다.
// 이 문자열은 고정된 값이며, 사용자의 입력이 아닙니다. str1은 언제든지 값이 바뀔 수 있습니다.

// console.log(str1);
// console.log()는 콘솔(터미널)에 값을 출력하는 함수입니다.


// #2
// const readline = require('readline');
// Node.js의 내장 모듈인 readline을 불러옵니다. 이 모듈을 통해 터미널에서 사용자 입력을 받을 수 있습니다.

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// 입력/출력 인터페이스를 생성합니다. input: process.stdin → 키보드로 입력 받고 output: process.stdout → 터미널에 출력합니다.

// rl.question('Enter string: ', (str2) => {
// rl.question()은 한 줄 입력을 기다리고, 입력이 완료되면 함수가 실행됩니다.
// 사용자가 입력한 문자열은 str2라는 이름의 매개변수에 저장됩니다.
// 'Enter string: '은 사용자에게 보여지는 프롬프트 메시지입니다.

//   console.log(`result: ${str2}`);
// 입력된 값을 result:라는 문자열과 함께 출력합니다. 템플릿 문자열(`...${...}`)을 사용해서 문자열과 변수를 함께 출력합니다.

//   rl.close();
// });
// 입력이 끝났기 때문에 인터페이스를 닫아줍니다. close()를 호출하지 않으면 프로그램이 종료되지 않습니다.

// Enter string: Hello => result: Hello


// #3
// const readline2 = require('readline');
// readline 모듈을 불러왔습니다 (이번엔 변수 이름을 readline2로 했습니다).

// const r2 = readline2.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// 입력/출력 인터페이스를 생성합니다. input: process.stdin → 키보드로 입력 받고 output: process.stdout → 터미널에 출력합니다.

// let input = [];
// r2.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str3 = input[0];
//     console.log(str3);
// });