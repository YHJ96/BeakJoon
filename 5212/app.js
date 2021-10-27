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
    // y축 x축 4방탐색
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];

    // 2차원 배열 완전탐색 시작
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++) {
            if(map[y][x] === 'X') {
                let count = 0;
                for(let i = 0; i < dy.length; i++) {
                    // 4방 탐색 좌표
                    const ny = y + dy[i];
                    const nx = x + dx[i];
                    // 4방 탐색 좌표에서 좌표평면에 벗어 나있으면 바다이므로 count + 1
                    if(ny < 0 || nx < 0 || ny > map.length - 1 || nx > map[y].length - 1) {
                        count += 1;
                        // 1해주고 다음 i++로 넘어감
                        continue;
                    }
                    // .일경우 바다이므로 count + 1
                    if(map[ny][nx] === '.') count += 1;
                }
                // 좌표에 카운트가 2이하 경우 push
                if(count < 3) land.push([y, x]);
            }
        }
    }
    // 직사각형 좌표 추출
    const rowStart = land[0][0];
    const rowEnd = land[land.length - 1][0];
    land.sort((a,b) => a[1] - b[1]);
    const colStart = land[0][1];
    const colEnd = land[land.length - 1][1];
    for(let i = rowStart; i <= rowEnd; i++) {
        let item = '';
        for(let j = colStart; j <= colEnd; j++) {
            let flag = 0;
            // 좌표를 가져와서 좌표랑 비교해서 맞으면 X대입
           for(let k = 0; k < land.length; k++) {
               if(land[k][0] === i && land[k][1] === j) {
                   // X찾는 즉시 break
                   item += 'X';
                   flag = 1;
                   break;
               }
           }
           // else 조건을 걸기위해 flag 생성
           if(flag === 1) continue;
           // 아닐경우 .대입
           else item += '.';
        }
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));