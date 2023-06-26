function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  arr.sort((a, b) => b - a).pop();
  return arr;
}

// 5일차 과제 1번입니다
//풀이: arr.length 를 사용하고, sort 함수 사용해서 비교하기
// sort 함수를 사용하여 계속하여 비교, 제일 작은 수가 제거됩니다
// 그나마 쉬웠던 문제
