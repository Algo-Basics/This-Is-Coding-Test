/* [문제]
두 배열 A, B와 숫자 K가 주어졌을 때, 최대 K번의 바꿔치기를 통해 A 배열의 모든 원소의 최대값을 출력하세요.
 */

(() => {
  let A = [1, 2, 5, 4, 3];
  let B = [5, 5, 6, 6, 5];
  let K = 3;
  let N = 5;

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i = 0; i < K; i++) {
    if (A[i] < B[i]) {
      A[i] = B[i];
    } else break;
  }

  let answer = A.reduce((acc, cur) => acc + cur);
  console.log(answer);
})();
