/* [문제]
N명의 학생 정보가 있다. 학생 정보는 학생의 이름과 학생의 성적으로 구분된다.
각 학생 정보가 주어졌을 때 성적이 낮은 순서대로 학생의 이름을 출력하는 프로그램을 작성하시오.
 */

// 선택 정렬 알고리즘
(() => {
  let arr = [
    ['홍길동', 95],
    ['이순신', 77],
    ['박산들', 100],
  ];
  let N = arr.length;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i][1] > arr[j][1]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  arr.forEach(el => console.log('1.', el[0]));
})();

// 삽입 정렬 알고리즘
(() => {
  let arr = [
    ['홍길동', 95],
    ['이순신', 77],
    ['박산들', 100],
  ];
  let N = arr.length;

  for (let i = 1; i < N; i++) {
    let tmp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j][1] > tmp[1]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tmp;
  }
  arr.forEach(el => console.log('2.', el[0]));
})();
