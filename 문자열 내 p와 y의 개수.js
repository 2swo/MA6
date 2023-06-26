function solution(s) {
    let count_p = 0;
    let count_y = 0;
    let count_P = 0;
    let count_Y = 0;
    for (let spell of s) {
        if (spell === 'p') count_p += 1;
        if (spell === 'y') count_y += 1;
        if (spell === 'P') count_P += 1;
        if (spell === 'Y') count_Y += 1;
    }
    return (count_p + count_P === count_y + count_Y) ? true : false;
}