/**
 [문제]
 10진수 n이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용해서 출력해야 합니다.
 */

// DFS 탐색(재귀)의 종료조건과 반복조건을 설정.
// 종료조건 : 나누어야 할 수 N 이 0이 되면 재귀를 종료한다.
// 재귀 반복 조건 : 0이 아닌 경우라면, 계속해서 나눌 수 있기 때문에 N / 2 를 넣어 재귀 호출
// ... 종료조건을 만나 재귀호출이 종료되면 나중에 호출된 재귀함수부터 POP 되면서 다음 코드를 실행시킨다.
// ... 이렇게 반대방향으로 진행되기 때문에 answer에 담기는 순서가 1101 이 아니라 1011 이 되는 것.

function solution(num) {
  let answer = '';

  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }

  DFS(num);
  return answer;
}

let result = solution(11);
console.log(result);
