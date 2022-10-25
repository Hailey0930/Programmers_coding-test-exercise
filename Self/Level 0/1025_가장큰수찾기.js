// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array 원소 ≤ 1,000
// array에 중복된 숫자는 없습니다.

function solution(array) {
  let result = [];
  let answer = [];
  array.map((el, i) => {
    result.push({ index: i, element: el });
  });

  result.sort((a, b) => b.element - a.element);
  answer.push(result[0].element, result[0].index);
  return answer;
}

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
