const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = input[i].trim();
    inputArray.push(item);
}

// 문자 2개를 비교해서 사이클 단어인지 확인하는 함수
function searchWord(str1, str2) {
    // 문자길이가 같지 않으면 사이클단어가 아니므로 return으로 종료
    if(str1.length !== str2.length) return false;
    // 문자열의 각각의 요소를 배열로 만듬
    const strArr = [...str1];
    const compare = [];
    // 배열의 길이만큼 반복문 시작
    for(let i = 0; i < strArr.length; i++) {
        // 제일 앞에 있는 단어를 빼줌
        const item = strArr.shift();
        // 제일 앞에 있는 단어를 제일 뒤로 보냄
        strArr.push(item);
        // compare 배열에 문자열로 변환하여 push
        compare.push(strArr.join(""));
    }
    // compare에 비교하려는 단어가 존재하지않으면 사이클 단어가 아님
    return compare.includes(str2);
}

function solution(arr) {
    let answer = 0;
    // 배열의 요소가 없을 때 까지 실행
    while(arr.length) {
        // 배열의 0번 인덱스의 값을 시작점으로 고정
        const target = arr[0];
        const idx = [];
        // 배열의 길이만큼 반복문 시작
        for(let i = 1; i < arr.length; i++) {
            // 사이클 단어인지 확인
            const check = searchWord(target, arr[i]);
            // 만약 사이클 단어가 맞으면 idx에 인덱스 번호 push
            if(check) idx.push(i);
        }
        // 사이클 단어가 없으면 arr에서 0번 인덱스만 삭제하고 answer + 1
        if(idx.length === 0) {
            arr.splice(0, 1);
            answer += 1;
            // 사이클 단어가 존재하면 해당 인덱스의 값도 삭제하고 0번 인덱스의 값도 삭제
        } else {
            // 내림차순의 이유는 splice를 사용하면 인덱스가 변하기 때문에 끝에서부터 하면 인덱스 변화를 막을 수 있음
            for(let i = idx.length - 1; i > -1; i--) {
                arr.splice(idx[i], 1);
            }
            arr.splice(0, 1);
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(inputArray));