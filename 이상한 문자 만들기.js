function solution(s) {
  let answer = "";
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        answer += words[i][j].toUpperCase();
      } else {
        answer += words[i][j].toLowerCase();
      }
    }
    if (i < words.length - 1) {
      answer += " ";
    }
  }
  return answer;
}

//문자열 s 를 split 함수로 나누어  words 에 담아주고, word의 길이를 사용하여 단어 사이의 공백을 활용한다.
