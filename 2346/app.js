const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[1].split(' ').map(Number);

// 자바스크립트는 자료구조 Deck을 사용할 수 없어서 메모리 초과 나중에 Deck을 직접 구현해 보기
function solution(arr) {
    const answer = [];
    const target = [];
    for(let i = 1; i <= arr.length; i++) target.push(i);
    for(let i = 0; i < arr.length; i++) {
        const idx = target.shift();
        answer.push(idx);
        const count = arr[idx - 1];
        if(count > 0) {
            for(let i = 0; i < count - 1; i++) {
                const item = target.shift();
                target.push(item);
            }
        } else {
            for(let i = 0; i < Math.abs(count); i++) {
                const item = target.pop();
                target.unshift(item);
            }
        }
    }
    return answer.join(' ');
}

console.log(solution(input));

/* C++ 해결코드
#include <bits/stdc++.h>
using namespace std;
int n, arr[1004];
deque <int> target;
vector <int> answer;
int main(void) {
    cin >> n;
    for(int i = 0; i < n; i++) cin >> arr[i];
    for(int i = 1; i <= n; i++) target.push_back(i);
    for(int i = 0; i < n; i++) {
        int idx = target.front();
        answer.push_back(idx);
        int count = arr[idx - 1];
        target.pop_front();
        if(count > 0) {
            for(int i = 0; i < count - 1; i++) {
                target.push_back(target.front());
                target.pop_front();
            }
        } else {
            for(int i = 0; i < abs(count); i++) {
                target.push_front(target.back());
                target.pop_back();
            }
        }
    }
    for(int i = 0; i < answer.size(); i++) cout << answer[i] << ' ';
}
*/