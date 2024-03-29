// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

function solution(board) {
  let answer = 0;
  let danger = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        danger.forEach((item) => {
          let [nextX, nextY] = item;
          [nextX, nextY] = [i + nextX, j + nextY];

          if (
            nextX >= 0 &&
            nextX < board.length &&
            nextY >= 0 &&
            nextY < board[i].length &&
            board[nextX][nextY] === 0
          ) {
            board[nextX][nextY] = 2;
          }
        });
      }
    }
  }

  board.forEach((a) => a.forEach((b) => (b === 0 ? answer++ : 0)));

  return answer;
}
