const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let idx in input) {
    if (idx === '0') inputArray.push(Number(input[idx]));
    else inputArray.push(input[idx].split(' ').map(Number));
}

function solution(arr) {
    let [n, ...meeting] = arr;
    let answer = 0;
    let time = 0;
    // 정렬을 위해 끝나는 시간과 시작하는 시간의 인덱스를 교체해준다.
    for(let i = 0; i < n; i++) meeting[i] = [meeting[i][1], meeting[i][0]];
    // 끝나는 시간 기준으로 오름차순 정렬을 한뒤 만약 시간이 같다면 시작하는 시간을 기준으로 오름차순 한다.
    meeting.sort((a,b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    });
    // meeting의 요소만큼 순회
    for(let i = 0; i < n; i++) {
        // 시간이 끝나는 시간보다 작을 경우 continue
        if(time > meeting[i][1]) continue;
        answer += 1;
        // 끝나는 시간을 재할당
        time = meeting[i][0];
    }
    return answer;
}

console.log(solution(inputArray));