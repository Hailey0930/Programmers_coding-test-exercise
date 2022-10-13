// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를 들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

function solution(s) {
  let result = [];
  result = s.split(" ").sort((a, b) => a - b);

  let answer = "";
  answer = result[0] + " " + result[result.length - 1];
  return answer;
}

function solution(s) {
  let result = s.split(" ");
  return Math.min(...result) + " " + Math.max(...result);
}

// 문자열로 이루어진 배열 숫자로 바꾸기
// let array = s.split(" ").map(v => +v)
// 문자열 앞에 사칙연산을 붙여주면 Number를 씌워주는 효과
