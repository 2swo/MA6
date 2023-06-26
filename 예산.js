function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) break;

    budget -= d[i];
    count += 1;
  }
  return count;
}

//최대한 많은 부서를 지원하기 위해서는 금액이 적은 부서부터 많은 부서까지 지원해야함
//sort 를 통해  d 를 오름차순으로 정렬
//for문으로 금액만큼 budget을 줄임, count 1씩 올리기
// budget 보다 금액이 더 크다? -> break 반복문 멈추기
