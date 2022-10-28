// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

function solution(my_string) {
  const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = [];
  let answer = 0;
  let arr = my_string.split("");
  arr.map((el1) => {
    Number.map((el2) => {
      if (el1.includes(el2)) result.push(el1);
    });
  });

  result.map((el) => {
    answer += parseInt(el);
  });
  return answer;
}

function solution(my_string) {
  let arr = [...my_string];
  let answer = 0;

  for (i = 0; i < arr.length; i++) {
    if (!isNaN(Number(arr[i]))) answer += Number(arr[i]);
  }
  return answer;
}
