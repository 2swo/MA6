// ex) "{{2},{2,1},{2,1,3},{2,1,3,4}}"
function solution(s) {
  // 문자열 -> 정수 이차원 배열
  const sArr = s
    .substring(2, s.length - 2) // length 함수 사용하여 길이 제한.
    .split("},{") // split 함수로 }{ 별로 자르기
    .map((e) => e.split(",").map((e) => parseInt(e)))
    // map 함수와 split 함수를 이용해서 다시 한번 나눠주기
    .sort((a, b) => a.length - b.length);
  const answer = []; // 답 제출할거 하나 만들고
  // 이차원배열을 순회하며 직전 배열과 겹치지 않는 요소만 answer에 추가하기
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      const temp = sArr[i][j];
      if (!answer.includes(sArr[i][j])) answer.push(sArr[i][j]);
    }
  }
  return answer;
}
