// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다.
// 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다.
// 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

// 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(a, b) {
  // 최대공약수 g 구하기
  let g = 1;
  for (let i = 1; i <= b; i++) {
    if (a % i === 0 && b % i === 0) g = i;
  }

  // 분모 b를 최대공약수 g로 나누기
  b = b / g;

  // b를 2와 5로 나눈 나머지 값이 0이 될 때까지 반복문 실행하기
  // (2와 5를 제외한 소수가 있는지 확인)
  while (b % 2 === 0) b = b / 2;
  while (b % 5 === 0) b = b / 5;

  // b가 1이라면 유한소수(분모의 소인수가 2와 5만 존재)이므로 1 리턴
  // b가 그 외의 값이라면 무한소수(분모에 2와 5를 제외한 소수가 포함)이므로 2 리턴
  return b === 1 ? 1 : 2;
}
