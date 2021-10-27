const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split('');
    inputArray.push(inputValue);
}

function solution(map) {
    let land = [];
    let answer = '';
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++) {
            if(map[y][x] === 'X') {
                let count = 0;
                for(let i = 0; i < 4; i++) {
                    const ny = y + dy[i];
                    const nx = x + dx[i];
                    if( (ny < 0 && nx < 0) || (ny < 0 && nx > map[y].length - 1 ) || (ny > map.length - 1 && nx < 0) || (ny > map.length && nx > map[y].length - 1) ) {
                        console.log(y, x)
                        count += 1;
                        continue;
                    }
                    if(ny < 0 || nx < x || ny > map.length - 1 || nx > map[y].length - 1) continue;
                    if(map[ny][nx] === '.') count += 1;
                }
                if(count < 3) land.push([y, x]);
            }
        }
    }
    
    const rowStart = land[0][0];
    const rowEnd = land[land.length - 1][0];
    land.sort((a,b) => a[1] - b[1]);
    const colStart = land[0][1];
    const colEnd = land[land.length - 1][1];
    for(let i = rowStart; i <= rowEnd; i++) {
        let item = '';
        for(let j = colStart; j <= colEnd; j++) {
            let flag = 0;
           for(let k = 0; k < land.length; k++) {
               if(land[k][0] === i && land[k][1] === j) {
                   item += 'X';
                   flag = 1;
                   break;
               }
           }
           if(flag === 1) continue;
           else item += '.';
        }
        console.log(item);
    }
    return answer
}

console.log(solution(inputArray));