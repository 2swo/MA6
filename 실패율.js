//실패율이 높은 스테이지부터 내림차순으로 정렬!
//스테이지 1,2,3,4,5에 나눠서 계산
//스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//1번을 완료해야 2번으로 넘어갈 수 있고, 이런 식인걸 감안해서 코드짜면 괜찮을듯?
function solution(N, stages) {
  let stagefail = [];
  let users = stages.length; //스테이지에 도달한 사용자의 수
  var answer = [];
  for (let i = 1; i <= N; i++) {
    let noClear = stages.filter((user) => i === user).length;
    let fail = noClear / users;
    users -= noClear;
    stagefail.push({ stage: i, fail: fail });
  }
  stagefail.sort((a, b) => {
    if (a.fail === b.fail) return a.stage - b.stage;
    else return b.fail - a.fail;
  });
  return stagefail.map((obj) => obj.stage);
  //map함수를 이용, stage의 값을 변환해줌.
}
