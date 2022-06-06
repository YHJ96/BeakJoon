const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(" ").map(Number);
    inputArray.push(inputValue);
}
// c++로 해결 똑같은 코드인데 시간초과와 타입 에러 해결하고 주석정리
function solution(arr) {
    let answer = [];
    let dp = [];
    let max = 0;
    const [ n, m ] = arr[0];
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);

    for(let i = 0; i < m; i++) {
        const [ node1, node2 ] = arr[i];
        graph[node2].push(node1);
    }

    function dfs(node) {
        visited[node] = true;
        let count = 1;
        for(let current of graph[node]) {
            if(visited[current]) continue;
            count += dfs(current);
        }
        return count;
    }

    for(let i = 1; i <= n; i++) {
        visited.fill(false);
        let num = dfs(i);
        dp[i] = num;
    }

    for(let i = 1; i <= n; i++) {
        if(max < dp[i]) max = dp[i];
    }
 
    dp.forEach((item, index) => {
        if(item === max) answer.push(index);
    });

    return answer.join(' ');
}

console.log(solution(inputArray));

/*
#include <bits/stdc++.h>
using namespace std;
vector<int> graph[10004];
int dp[10004], visited[10004], n, m, a, b, _max;

int dfs(int node) {
    visited[node] = 1;
    int count = 1;
    for(int current : graph[node]) {
        if(visited[current]) continue;
        count += dfs(current);
    }
    return count;
}

int main() {
    cin >> n >> m;
    while(m--) {
        cin >> a >> b;
        graph[b].push_back(a);
    }
    for(int i = 1; i <= n; i++) {
        memset(visited, 0, sizeof(visited));
        dp[i] = dfs(i);
        _max = max(dp[i], _max);
    }
    for(int i = 1; i <= n; i++) {
        if(_max == dp[i]) cout << i << " ";
    }
    return 0;
}
*/