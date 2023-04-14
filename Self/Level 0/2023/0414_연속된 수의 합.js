// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
// 두 정수 num과 total이 주어집니다.
// 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  let answer = [];

  if (total % num === 0) {
    const center = total / num;
    answer.push(center);

    let i = 1;
    while (answer.length < num) {
      answer = [center - i, ...answer, center + i];
      i++;
    }

    return answer;
  }

  const center = Math.floor(total / (num / 2) / 2);

  let i = 1;
  answer.push(center, center + 1);

  while (answer.length < num) {
    answer = [center - i, ...answer, center + i + 1];
    i++;
  }

  return answer;
}
