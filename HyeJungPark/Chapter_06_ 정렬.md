# _Chapter_06 정렬_

---

### 정렬 알고리즘 개요

- 정렬 알고리즘은 이진 탐색 알고리즘의 전처리 과정으로 활용될 수 있다.
- 여러 종류의 정렬 알고리즘이 있고 방법에 따라 효율성이 달라지기 때문에, 적절한 문제에 적절한 방법을 선택해야함.

### 선택 정렬 알고리즘

![selectionSortAlgorithm](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbod2mE%2FbtrHTWWo24w%2FByAL21Ua96Y4MN6ccvFYyk%2Fimg.png)

- 데이터들 중 매번 작은 값을 '선택' 하기 때문에 선택 정렬 알고리즘
- 매 반복마다 작은 값을 선택해 앞으로 보내주면 전체 데이터의 정렬이 이루어진다.
- N만큼의 길이를 가진 1차원 배열이 있다면 하나의 수와 나머지 수를 비교하는 횟수는 N-1 이 될 것이다.
- 2중 반복문을 사용해 전체 정렬 대상 데이터들을 N-1 만큼 반복하고, 그 안에서 정렬 대상과 비교 대상을 N까지 반복하며 비교한다.
- 이 때 스와프(swap) 라는 기법을 사용할 수 있다. 안쪽 반복문에서 자리를 바꿀 대상을 임시 변수에 저장한 뒤에 재할당해주는 방법. 즉 배열에서 두 요소의 자리를 변경하는 기법이다.
- 선택 정렬은 정렬 대상을 N-1 만큼 반복하고, 그 정렬 대상을 비교 대상들과 각각 비교하는 연산을 한다. 따라서 O(N^2)의 시간복잡도를 가진다.
- [selectionSortAlgorithm](./06*%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/selectionSort.jsThis-Is-Coding-Test\HyeJungPark\06*정렬 알고리즘\selectionSort.js)

### 삽입 정렬 알고리즘

![insertSortAlgorithm](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOq2HS%2FbtqwVf7iAGc%2FoeF51vzGKLgxkoc5allKqk%2Fimg.png)

- 특정 데이터를 적절한 위치에 '삽입' 한다는 의미의 정렬 알고리즘
- 필요할 때만 위치를 변경하기 때문에 선택 정렬 알고리즘에 비해 효율적이고, 특히 데이터가 거의 정렬된 상태일 때 유용하다.
- 삽입 정렬 알고리즘에서는 두 번째 요소부터 비교를 시작한다. 두 번째 요소와 바로 직전 요소를 비교해 위치를 선정하고 그 다음 요소로 넘어간다. 세 번째 요소는 그 이전의 첫 번째, 두 번째 요소들을 비교해 정렬이 완료되면 자신이 들어가야 할 위치에 삽입된다.
- 현재 비교중인 요소 좌측의 요소들은 이미 정렬이 완료된 상태이고, 요소가 하나씩 추가될 때마다 정렬의 범위가 넓어지는 방식으로 진행된다.
- [insertionSortAlgorithm](./06_%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/insertionSort.js)
