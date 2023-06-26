// 11일차 문제, record =["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
function solution(record) {
  let answer = [];
  const map = new Map(); // map 함수를 이용하여 저장

  for (let i = 0; i < record.length; ++i) {
    //length 함수를 이용하여 적용.
    const [state, uid, name] = record[i].split(" "); // split 함수를 이용해서 스페이스바 별로 자르기.

    if (state == "Leave") {
      // 채팅방을 나갔을경우
      answer.push([uid, "님이 나갔습니다."]);

      continue;
    }

    if (state == "Enter") {
      // 채팅방에 들어왔을 경우
      answer.push([uid, "님이 들어왔습니다."]);
    }

    map.set(uid, name); // uid와 이름은 다르게 쓰일 수가 있다.
  }

  return answer.map((ele) => map.get(ele[0]) + ele[1]);
}
