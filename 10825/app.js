const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split(' ');
    inputArray.push({ name : inputValue[0], korean : +inputValue[1], english : +inputValue[2], math : +inputValue[3] });
}

function solution(arr) {
    let answer = '';
    arr.sort((a,b) => {
        // 국어점수 내림차순 정렬 시작
       if(a.korean < b.korean) return b.korean - a.korean;
       else if (a.korean > b.korean) return b.korean - a.korean;
       // 국어점수가 같다면 영어점수 오름차순 정렬 시작
       else {
           if(a.english < b.english) return a.english - b.english;
           else if(a.english > b.english) return a.english - b.english;
           // 국어점수와 영어점수가 같다면 수학점수 내림차순 정렬시작
           else {
               if(a.math < b.math) return b.math - a.math;
               else if(a.math > b.math) return b.math - a.math;
               // 국어점수 영어점수 수학점수가 같다면 문자열 sort
               else {
                if (a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0;
               }
           }
       }
    });
    // 정답 정제
    for(let x of arr) {
        answer += x.name + '\n';
    }
    return answer;
}

console.log(solution(inputArray));