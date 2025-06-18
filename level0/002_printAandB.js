// 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
// 제한사항) -100,000 ≤ a, b ≤ 100,000

// #1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    let [a, b] = line.split(' ').map(Number);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    rl.close();
});


// #2
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
//     rl.close();
// }).on('close', function () {
//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
// });

// #1
// const readline = require('readline');
// readline 모듈 불러오기. 터미널에서 입력을 받을 수 있게 해줍니다.

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// 입력/출력 인터페이스 생성합니다.
// process.stdin은 키보드 입력
// process.stdout은 콘솔 출력

// rl.on('line', function (line) {
// 사용자가 한 줄을 입력하고 엔터를 누르면 이 함수가 실행됩니다.
// line에는 사용자가 입력한 문자열 전체가 들어옵니다. 예: "3 5"

//     let [a, b] = line.split(' ').map(Number);
// line.split(' '): "3 5" → ["3", "5"]
// .map(Number): 문자열 배열을 숫자로 변환 → [3, 5]
// [a, b]: 구조 분해 할당으로 각각 a = 3, b = 5 저장

//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
// 템플릿 문자열을 사용해서 출력

//     rl.close();
// });


// #2
// const readline = require('readline');
// Node.js에서 사용자 입력을 받을 수 있게 해주는 readline 모듈을 불러오는 코드입니다.
// Node.js는 기본적으로 prompt() 같은 입력 기능이 없어서, 이걸 따로 불러와야 한다.

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// 인터페이스를 생성하는 코드예요. 이 인터페이스를 통해 입력과 출력을 다룰 수 있디.
// input: process.stdin → 키보드 입력을 받습니다.
// output: process.stdout → 콘솔에 출력합니다.
// 만들어진 인터페이스를 rl이라는 이름으로 저장한다.

// let input = [];
// 입력을 저장할 빈 배열을 만듭니다.입력이 들어오면 input 배열 안에 데이터를 넣어둔다.
// 여기선 한 줄 입력만 받을 거지만, 여러 줄 입력도 이 배열 구조로 확장할 수 있다.

// rl.on('line', function (line) {
// 사용자가 한 줄을 입력하고 엔터를 누르면 실행되는 코드입니다. line은 사용자가 입력한 전체 문자열이 담겨요. 예: "3 5"

//     input = line.split(' ');
// 사용자가 입력한 문자열을 공백 기준으로 나눠서 배열로 만듭니다.
// "3 5" → ["3", "5"]처럼 저장된다. 이제 input[0]은 "3", input[1]은 "5"입니다.

//     rl.close();
// 한 줄 입력을 받고 나면 입력 인터페이스를 닫습니다. 닫으면 프로그램은 더 이상 입력을 받지 않고 on('close') 부분으로 넘어갑니다.

// }).on('close', function () {
// rl.close()가 실행되면 이 부분이 자동으로 실행됩니다. 입력이 끝났을 때 최종 처리를 할 수 있는 자리입니다.

//     let a = Number(input[0]);
//     let b = Number(input[1]);
// 문자열 "3"과 "5"를 숫자로 바꿔서 변수 a, b에 저장합니다. Number()는 문자열을 숫자로 변환하는 함수입니다.

//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
// });
// 각각의 숫자를 a = 3, b = 5처럼 출력합니다. 템플릿 리터럴(`...${...}`)을 사용해서 문자열에 변수를 쉽게 끼워 넣을 수 있다.

