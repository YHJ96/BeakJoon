const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const king = input[0].split(' ')[0];
const stone = input[0].split(' ')[1];
const steps = [];
for(let i = 1; i < input.length; i++) {
    steps.push(input[i].trim());
}

function solution(king, stone, steps) {
    let answer = '';
    const compare = ['A','B','C','D','E','F','G','H'];
    const step = {
        T : [1,0],
        RT : [1,1],
        R : [0,1],
        RB: [-1,1],
        B : [-1,0],
        LB : [-1,-1],
        L : [0,-1],
        LT : [1,-1]
    };
    let kingY = parseInt(king[1] - 1);
    let kingX = compare.indexOf(king[0]);
    let stoneY = parseInt(stone[1] - 1);
    let stoneX = compare.indexOf(stone[0]);
    for(let i = 0; i < steps.length; i++) {
        const ny = kingY + step[steps[i]][0];
        const nx = kingX + step[steps[i]][1];
        if(ny < 0 || nx < 0 || ny > 7 || nx > 7) continue;
        if(ny === stoneY && nx === stoneX) {
            const sy = stoneY + step[steps[i]][0];
            const sx = stoneX + step[steps[i]][1];
            if(sy < 0 || sx < 0 || sy > 7 || sx > 7) continue;
            stoneY = sy;
            stoneX = sx;
        }
        kingY = ny;
        kingX = nx;
    }
    answer += compare[kingX] + (kingY + 1) + '\n';
    answer += compare[stoneX] + (stoneY + 1);
    return answer;
}

console.log(solution(king, stone, steps));