// 문자열 s가 매개변수로 주어집니다.
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 제한사항
// 0 < s의 길이 < 1,000
// s는 소문자로만 이루어져 있습니다.

function solution(s) {
  let count = [...s].reduce(
    (acc, cur) =>
      acc[cur] ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
    {}
  );
  return Object.keys(count)
    .filter((el) => count[el] === 1)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join("");
}

function solution(s) {
  let map = new Map();
  [...s].map((el) => map.set(el, map.get(el) + 1 || 1));
  return [...map]
    .filter((el) => el[1] === 1)
    .map((el) => el[0])
    .sort()
    .join("");
}
