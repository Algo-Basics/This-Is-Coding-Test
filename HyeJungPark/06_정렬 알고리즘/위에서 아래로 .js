/* 문제 : 하나의 수열에는 다양한 수가 존재한다. 
이러한 수는 크기에 상관없이 나열되어 있다. 이 수를 큰 수부터 작은 수의 순서로 정렬해야 한다. 
수열을 내림차순으로 정렬하는 프로그램을 만드시오.
 */

// 선택정렬 알고리즘
(() => {
  let arr = [15, 27, 12, 8, 10];
  let N = arr.length;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(`${i + 1}회전: `, arr);
  }
})();

// 삽입정렬 알고리즘
(() => {
  let arr = [15, 27, 12, 8, 10];
  let N = arr.length;

  for (let i = 1; i < N; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (tmp > arr[j]) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
    console.log(arr);
  }
})();
