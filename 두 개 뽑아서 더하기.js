function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length-1; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            var a = numbers[i];
            var b = numbers[j];

            answer.push(a+b);     
        } 
    }
    answer.sort(compare);
    
    var mySet = new Set(answer);

    return [...mySet]
}

function compare(a, b) {
    return a-b
}