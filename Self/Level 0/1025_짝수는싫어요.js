// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
  let answer = [];
  let arr = new Array(n).fill(1);

  arr.map((_, i) => {
    i % 2 === 0 && answer.push(i + 1);
  });
  return answer;
}

function solution(n) {
  let answer = [];
  for (i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}
