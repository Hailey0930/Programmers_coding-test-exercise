// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  let obj = {};
  let arr = [];

  for (let i of array) {
    obj[i] ? ++obj[i] : (obj[i] = 1);
  }

  for (let i in obj) {
    arr.push([i, obj[i]]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  if (arr.length > 1 && arr[0][1] === arr[1][1]) return -1;
  return Number(arr[0][0]);
}

function solution(array) {
  let m = new Map();

  for (let n of array) m.set(n, (m.get(n) || 0) + 1);

  m = [...m].sort((a, b) => b[1] - a[1]);

  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
