const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0];

solution(input);

function solution(s) {
    let answer = 0;
    const dial = [[1],
    ['A','B','C'],
    ['D','E','F'], 
    ['G','H','I'], 
    ['J','K','L'],
    ['M','N','O'],
    ['P','Q','R','S'],
    ['T','U','V'],
    ['W','X','Y','Z']];
    s = [...s];
    dial.map((dialArr, index) => {
       return s.map((item) => {
           if(dialArr.includes(item)) {
               answer += index + 1;
           }
       });
    });
    answer += s.length;
    console.log(answer);
}