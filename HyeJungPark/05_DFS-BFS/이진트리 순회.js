/**
 [문제]
 1 => 2, 3
 2 => 4 , 5
 3 => 6 , 7
 형태의 이진트리가 있을 때, 이 이진트리를 전위순회, 중위순회, 후위순회로 출력하는 연습.

 [전위 순회]
 ROOT - LEFT - RIGHT

 [중위 순회]
 LEFT - ROOT - RIGHT

 [후위 순회]
 LEFT - RIGHT - ROOT
 */

// 1. answer에 현재 n이 추가된다. (1)
// 2. DFS(1 * 2) 가 호출된다.
// 3. answer에 현재 n이 추가된다. (1 2)
// 4. DFS(2 * 2)가 호출된다.
// 4. answer에 현재 n이 추가된다. (1 2 4)
// 5. DFS(4 * 2)가 호출된다.
// 6. if(n > 7) 조건에 해당되어 return 된다.
// 7. DFS(4 * 2 + 1)이 호출된다.
// 8. if(n > 7) 조건에 해당되어 return 된다.
// 9. 해당 n에 대한 DFS 함수는 종료된다.
// 10. DFS(2 * 2 + 1)이 호출된다.
// 11. answer에 현재 n 이 추가된다. (1 2 4 5)
// 12. DFS(5 * 2 + 1) 이 호출된다.
// 13. 조건에 막혀 종료...

function preorder(node) {
  let answer = '전위 순회: ';
  function DFS(n) {
    // 종료 조건
    if (n > 7) {
      return;
    }
    // 반복 조건
    else {
      answer += `${n} `;
      DFS(n * 2);
      DFS(n * 2 + 1);
    }
  }
  DFS(node);
  return answer;
}

let resultPreorder = preorder(1);
console.log(resultPreorder);

// 1. DFS(1 * 2) 를 호출한다.
// 2. DFS(2 * 1) 을 호출한다.
// 3. DFS(2 * 2) 를 호출한다.
// 4. DFS(4 * 2) 를 호출한다.
// 5. if 조건에 걸려 return 된다.
// 4. DFS(4 * 2  + 1) 을 호출하기 전에 answer에 4를 추가한다.
// 5. DFS(9) return
// 6. DFS(2 * 2 + 1) 호출하기 전에 answer에 2를 추가한다. ...

function inorder(node) {
  let answer = '중위 순회: ';
  function DFS(n) {
    // 종료 조건
    if (n > 7) {
      return;
    }
    // 반복 조건
    else {
      DFS(n * 2);
      answer += `${n} `;
      DFS(n * 2 + 1);
    }
  }
  DFS(node);
  return answer;
}

let resultInorder = inorder(1);
console.log(resultInorder);

function postorder(node) {
  let answer = '중위 순회: ';
  function DFS(n) {
    // 종료 조건
    if (n > 7) {
      return;
    }
    // 반복 조건
    else {
      DFS(n * 2);
      DFS(n * 2 + 1);
      answer += `${n} `;
    }
  }
  DFS(node);
  return answer;
}

let resultPostorder = postorder(1);
console.log(resultPostorder);
