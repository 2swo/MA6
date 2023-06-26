function solution(numbers, hand) {
  let [Lnumbers, Lhand] = [3, 0];
  let [Rnumbers, Rhand] = [3, 2];
  let result = "";

  numbers.forEach((x) => {
    if (x === 1 || x === 4 || x === 7) {
      [Lnumbers, Lhand] = [Math.floor((x - 1) / 3), 0];
      result += "L";
    } else if (x === 3 || x === 6 || x === 9) {
      [Rnumbers, Rhand] = [Math.floor((x - 1) / 3), 2];
      result += "R";
    } else {
      if (e === 0) e = 11;
      let [nextnumbers, nexthand] = [Math.floor((x - 1) / 3), 1];
      let Ldistance =
        Math.abs(Lnumbers - nextnumbers) + Math.abs(Lhand - nexthand);
      let Rdistance =
        Math.abs(Rnumbers - nextnumbers) + Math.abs(Rhand - nexthand);

      if (
        Ldistance < Rdistance ||
        (Ldistance == Rdistance && hand === "left")
      ) {
        [Lnumbers, Lhand] = [nextnumbers, nexthand];
        result += "L";
      } else {
        [Rnumbers, Rhand] = [nextnumbers, nexthand];
        result += "R";
      }
    }
  });
  return result;
}
