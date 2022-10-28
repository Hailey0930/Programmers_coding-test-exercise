// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// my_string에는 숫자가 한 개 이상 포함되어 있습니다.
// my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

function solution(my_string) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = [];
  let arr = my_string.split("");
  arr.map((el1) => {
    num.map((el2) => {
      if (Number(el1) === el2) answer.push(Number(el1));
    });
  });
  return answer.sort((a, b) => a - b);
}

function solution(my_string) {
  return my_string
    .split("")
    .filter((el) => !isNaN(el))
    .map((el) => +el)
    .sort((a, b) => a - b);
}
