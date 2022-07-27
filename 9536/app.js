const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
input.shift();
let items = [];
for (let item of input) {
    items.push(item);
    if (item === "what does the fox say?") {
        items.pop();
        inputArray.push(items);
        items = [];
    }
}

// 여우의 울음소리를 찾는 함수 생성
function serachFox(arr) {
    const result = [];
    // 문자열을 배열로 정제
    const target = arr.shift().split(' ');
    const sounds = [];
    for (let sound of arr) {
        // 울음 소리만 구조 분해 할당으로 추출
        const [animal, gose, noise] = sound.split(' ');
        // 울음 소리 push
        sounds.push(noise);
    }
    // target의 요소만큼 순회 시작
    for (let item of target) {
        // 동물의 사운드에 포함되지 않으면 item push
        if (!sounds.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

function solution(arr) {
    const answer = [];
    // arr 요소만큼 순회시작
    for (let x of arr) {
        const item = serachFox(x);
        // item push
        answer.push(item);
    }
    // 정답 정제
    return answer.map((item) => item.join(' ')).join('\n');
}

console.log(solution(inputArray));