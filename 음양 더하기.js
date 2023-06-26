function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }
  return answer;
}

//인풋으로 주어진 배열을 모두 더하자. 2개의 배열이 주어졌는데
//첫번째는 정수로 구성되어 모두 합해야 하는 배열이다. 두번째는 정수의 부호를 결정하는 배열이다

//반복문 사용, 길이 모두 같으니 조건문 상관 x
//signs 값이 true -> + false -> - 로 계산
