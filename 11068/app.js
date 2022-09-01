const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
input.shift();

function serachNum(num) {
  // 자바스크립트는 32 진법까지 지원하므로 수동으로 데이터 생성하여 변수에 저장
  const parse = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "!",
    "@",
    "#",
    "?",
  ];
  // 2진법 부터 64진법까지 반복 수행
  for (let i = 2; i <= 64; i++) {
    const toCode = [];
    let target = num;
    // 진법 전환
    while (target !== 0) {
      const item = target % i;
      if (target % i === 0) {
        toCode.push(parse[item]);
        target = target / i;
      } else {
        toCode.push(parse[item]);
        target = parseInt(target / i);
      }
    }
    // 진법이 회문인지 확인하여 회문이면 바로 return
    if (toCode.join("") === toCode.reverse().join("")) return true;
  }
  return false;
}

function solution(arr) {
  const answer = [];
  // arr의 요소만큼 순회 시작
  for (let x of arr) {
    const ck = serachNum(x);
    if (ck) answer.push(1);
    else answer.push(0);
  }
  // 정답 정제
  return answer.join("\n");
}

console.log(solution(input));
