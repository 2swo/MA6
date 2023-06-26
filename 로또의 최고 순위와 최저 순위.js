function solution(lottos, win_nums) {
  var answer = [];
  let zero = []; //0을 넣기 위한 배열
  let tmp = []; //일치값을 넣기 위한 배열

  //lottos를 순회하면서 zero와 tmp에 맞는 값 넣기
  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) {
      zero.push(lottos[i]); // 0을 찾아서 zero에 넣기
    } else {
      //win_nums와 일치하는 값을 찾아서 tmp에 넣기
      for (let j = 0; j < 6; j++) {
        if (lottos[i] === win_nums[j]) {
          tmp.push(lottos[i]);
        }
      }
    }
  }

  //구매번호를 전부 알고 있으면서, 당첨번호와 전부 일치 하지 않는 경우
  if (tmp.length === 0 && zero.length === 0) {
    return [6, 6];
  }

  //최고 순위 계산하기 (lottos의 0값이 당첨번호와 모두 일치하는 경우)
  answer[0] = 7 - (tmp.length + zero.length);

  //최저 순위 계산하기 (lottos의 0값이 당첨번호와 모두 일치 하지 않는 경우)
  if (tmp.length >= 2) {
    answer[1] = 7 - tmp.length;
  } else {
    answer[1] = 6;
  }

  return answer;
}
