const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 그대로 출력하기 위한 정제 원문을 줄바꿈만 하여 배열에 저장
let input = fs.readFileSync(filePath).toString().split("\n");
// 정제 완료
console.log(input.join("\n"));