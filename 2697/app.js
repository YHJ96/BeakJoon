const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => item.trim());
input.shift();

function serachNum(target) {
    let result = [];
    // 단어 탐색시작
    for(let i = 0; i < target.length; i++) {
        let start = '';
        let end = [];
        // 중간 숫자를 i의 다음 문자로 초기화
        let mid = target[i + 1];
        // 가능한 모든 숫자 검색시작
        for(let j = 0; j < target.length; j++) {
            // 가능한 모든 숫자를 검색하기 위해서 i를 증가시키면서 start에 넣기
            if(j <= i) start += target[j];
            // i 보다 작은 숫자들은 end 배열에 push
            else end.push(target[j]);
        }
        // 숫자를 비교할 배열 초기화
        const compare = [];
        // 단어 탐색시작
        end.forEach((item) => {
            // item과 mid를 암묵적 정수 변환뒤 비교 해서 compare의 요소가 mid보다 크다면 compare에 정수형으로 넣기
            if(+item > +mid) compare.push(+item); 
        });
        // 만약에 mid보다 큰 숫자가 없다면 그 숫자는 불가능함으로 continue하고 다음 반복문 실행
        if(compare.length === 0) continue;
        else {
            let num = '';
            // compare을 올림차순 정렬
            compare.sort((a,b) => a-b);
            // 제일 작은 숫자를 mid로 지정하고 문자로 치환
            mid = compare[0].toString();
            // end 배열에서 mid의 위치 확인
            const index = end.indexOf(mid);
            // end 배열에서 해당 요소 삭제
            end.splice(index, 1);
            // end를 올림차순 정렬 모든 요소가 문자이므로 정수형으로 암묵적 변환을 한뒤 대소비교
            end.sort((a,b) => +a - +b);
            // num 을 만들어주기
            num += start;
            num += mid;
            num += end.join('');
            // 80자리까지 입력값에서 올수 있으므로 BigInt로 치환
            result.push(BigInt(num));
        }
    }
    // 만약 반복문 과정이 끝나도 result에 요소가 없다면 불가능한 숫자
    if(result.length === 0) return "BIGGEST";
    else {
        // sort정렬 요소가 BigInt이므로 BigInt 요소로 비교
        result.sort((a,b) => {
            if(a-b > 0n) return 1;
            else if(a-b < 0n) return -1;
            else return 0;
        });
        // 제일 작은 숫자를 반환
        return result[0].toString();
    }
}

function solution(arr) {
    let answer = [];
    // 모든 배열의 요소마다 명령문 진행
    for(let x of arr) {
        const item = serachNum(x);
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(input));