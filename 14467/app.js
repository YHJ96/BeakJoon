const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(" ").map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    // 소의 위치를 저장한 자료구조 Map
    let cowPosition = new Map();
    for(let item of arr) {
        // 분해구조할당으로 소와 소의 위치 변수 초기화
        const [ cow, position ] = item;
        // 만약 Map에 소가 없다면 소의 번호와 좌표 입력
        if(!cowPosition.has(cow)) cowPosition.set(cow, position);
        // Map에 소가 있을 경우
        else {
            // 만약 소의 좌표가 같다면 continue
            if(cowPosition.get(cow) === position) continue;
            // 소의 좌표가 다르다면 answer + 1
            else {
                answer += 1;
                // 좌표 갱신
                cowPosition.set(cow, position);
            }
        }
    }
    return answer;
}

console.log(solution(inputArray));