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
       if(a.korean < b.korean) return b.korean - a.korean;
       else if (a.korean > b.korean) return b.korean - a.korean;
       else {
           if(a.english < b.english) return a.english - b.english;
           else if(a.english > b.english) return a.english - b.english;
           else {
               if(a.math < b.math) return b.math - a.math;
               else if(a.math > b.math) return b.math - a.math;
               else {
                if (a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0;
               }
           }
       }
    });
    for(let x of arr) {
        answer += x.name + '\n';
    }
    return answer;
}

console.log(solution(inputArray));