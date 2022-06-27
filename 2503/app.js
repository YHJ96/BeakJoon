const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

// 야구게임 결과 생성 함수
function baseball(target, num) {
    let [strike, ball] = [0, 0];
    // 변수 문자열로 치환
    target = target.toString();
    num = num.toString();
    // 야구게임 자리수 만큼 반복
    for(let i = 0; i < 3; i++) {
        // 자리와 숫자가 같으면 스트라이크
        if (target[i] === num[i]) strike += 1;
        // 자리는 다르지만 숫자가 포함되 있으면 볼
        else if (target[i] !== num[i] && target.includes(num[i])) ball += 1;
    }
    return [strike, ball];
}

// 숫자의 요소중 중복이 있는지 확인하는 함수
function distance(num) {
    num = num.toString();
    const check = new Set([...num]);
    if (check.size === num.length) return false;
    else return true;
}

function solution(arr) {
    let answer = 0;
    const num = [];
    // 123부터 999까지 반복 시작
    for(let i = 123; i <= 999; i++) {
        // 숫자에 0이 들어갈 경우 제외
        if (i.toString().includes(0)) continue;
        // 숫자에 반복되는 숫자가 들어갈 경우 제외
        if (distance(i)) continue;
        num.push(i);
    }
    // 완전탐색 시작
    for(let i = 0; i < num.length; i++) {
        let flag = true;
        // 게임의 조건 확인
        for(let j = 0; j < arr.length; j++) {
            const [strike, ball] = baseball(num[i], arr[j][0]);
            // 게임의 결과가 다른걸 찾으면 반복문 중지하고 나가기
            if (strike !== arr[j][1] || ball !== arr[j][2]) {
                flag = false;
                break;
            }
        }
        // 모든 결과에 부합하는지 확인
        if (flag) answer += 1;
    }
    return answer;
}

console.log(solution(inputArray));