function solution(array, commands) {
    let test = [];
    commands.forEach(command => {
        const arrayCommand = array.slice(command[0]-1, command[1]);
        arrayCommand.sort((a, b) => a - b);
        test.push(arrayCommand[command[2]-1]);
    })
    return test;
}