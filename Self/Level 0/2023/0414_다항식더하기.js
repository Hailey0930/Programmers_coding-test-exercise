// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
  let arr = polynomial.split(" + ");
  let xTerm = 0;
  let constant = 0;

  arr.map((el) => {
    if (el.includes("x")) {
      const tmp = el.split("x");

      tmp[0] ? (xTerm += parseInt(tmp[0])) : xTerm++;
    } else if (el !== "+") {
      constant += parseInt(el);
    }
  });

  if (xTerm !== 0 && constant !== 0) {
    if (xTerm === 1) {
      return `x + ${constant}`;
    }
    return `${xTerm}x + ${constant}`;
  }

  if (xTerm === 0 && constant !== 0) {
    return `${constant}`;
  }

  if (xTerm !== 0 && constant === 0) {
    if (xTerm === 1) {
      return "x";
    }
    return `${xTerm}x`;
  }

  if (xTerm === 0 && constant === 0) {
    return "0";
  }
}

function solution(polynomial) {
  const arr = polynomial.split(" + ");

  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
