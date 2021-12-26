const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

function solution(arr) {
    let answer = '';
    // 버블정렬 실행
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            // j가 배열의 끝에 도착하면 정지
            if(j === arr.length) break;
            // 앞에 있는 값이 뒤에 있는 값보다 크면 실행
            if(arr[j] > arr[j+1]) {
                // 배열의 위치 바꾸기
                const [acc, curr] = [arr[j], arr[j+1]];
                arr[j] = curr;
                arr[j+1] = acc;
                // 위치를 바꿀경우 정답추출
                answer += arr.join(' ') + '\n';
            }
        }
    }
    return answer.trim();
}

console.log(solution(input));