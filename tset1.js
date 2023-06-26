    // 보드 값 =[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
    // moves 값 =[1,5,3,5,1,2,1,4] 결과 = 4
    // 우림이형의 크레인 인형뽑기 게임 파이썬으로 푼 것.
    function solution(boards, moves):
        moves = list(map(lambda mv : mv-1, moves))
        stack =[0]

        for i in moves :
            for board in boards :
                if board[i] != 0 :
                    stack.append(board[i])
                    board[i] = 0    
                    if stack[-1] == stack[-2] :
                    stack.pop()
                    stack.pop()
                break
                console.log (stack);